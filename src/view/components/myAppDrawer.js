import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../reactContext";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"
const appBarHeight = 54;
const useStyle = makeStyles((theme) => ({
  root: {},
  MainDrawer: {},
}));

export default class MyDrawer extends React.Component {
  constructor({
    activeStyle,
    animationDuration,
    drawerState,
    className,
    hoverStyle,
    textStyle,
    iconStyle,
    iconPosition,
    drawerChildren,
    ComponentSpacing,
    setDrawer,
  }) {
    super();
this.setDrawer=setDrawer;
    this.ref = React.createRef();
    this.drawerState = drawerState;
    this.className = className;
    this.hoverStyle = hoverStyle;
    this.textStyle = textStyle;
    this.iconStyle = iconStyle;
    this.iconPosition = iconPosition;
    this.drawerChildren = drawerChildren;
    this.ComponentSpacing = ComponentSpacing;
    this.activeStyle = activeStyle;
    this.state = {
      selectedIndex: null,
      previouslySelected: null,
      previousBC: null,
    };
  }

  timing(timeFraction) {
    return timeFraction;
  }

  getTotalOffset() {
    let holding = 0;
    for (let i = 0; i < this.ref.current.children.length; i++) {
      holding += this.ref.current.children.item(i).offsetWidth;
    }
    return holding;
  }

  initDrawerComponent() {


    this.drawerChildren.map((data, index) => {
      let textNode = document.createTextNode(data.text);
      let node = document.createElement(`div`);
       

      node.className = `listTile${index}`;
      if (this.className === null) {
        node.style.overflow = "hidden";
        node.style.marginTop = `${90 * index}px`;
        node.style.whiteSpace = "nowrap";
        node.style.position = "absolute";
        node.style.borderTopRightRadius = "50px";
        node.style.borderBottomRightRadius = "50px";
        node.style.padding = "10px 10px 10px 10px";
        node.style.backgroundColor = "white";
      } else {
        node.className = this.className;
      }

      if (data.onClick === null || data.onClick === undefined) {
        node.onclick = () => {
          console.log("no click method defined");
        };
      } else {
        node.onclick = (e) => {
    

          if (
            this.state.selectedIndex !== index ||
            this.state.selectedIndex === null
          ) {
            if (this.state.selectedIndex != null) {
              this.ref.current.children.item(
                this.state.selectedIndex
              ).className = this.props.className;
              // node.className = this.props.className;
            }
            this.ref.current.children.item(
              index
            ).className = this.props.activeColor;
            // node.style.backgroundColor = this.props.activeColor;
            this.setState({ selectedIndex: index });
          }

          data.onClick(index);
          this.animateBackWard();
          this.setDrawer();
        };
      }

      node.appendChild(textNode);
      this.ref.current.appendChild(node);

      node.style.transform = `translateX(${-(node.offsetWidth+5)}px)`;
      if (this.ComponentSpacing !== null || this.ComponentSpacing !== undefined) {
        node.style.marginTop = `${
          (this.ComponentSpacing + node.offsetHeight) * index
        }px`;
      } else {
        node.style.marginTop = `${node.offsetHeight * index}px`;
      }
    });
  }

  async animateForward() {
    const totalOffset = this.getTotalOffset();
    for (let i = 0; i < this.ref.current.children.length; i++) {
      const node = this.ref.current.children.item(i);
      const offSet = node.offsetWidth;

      await (() =>
        new Promise((accept) => {
          let timing = this.timing;
          let ratio = Math.round(
            (this.animationDuration ?? 500 / totalOffset) * offSet
          );
          setTimeout(() => {
            {
              let start = performance.now();
              function openDrawerAnimation(timeStamp) {
                let timeFraction = (timeStamp - start) / ratio;
                if (timeFraction > 1) timeFraction = 1;
                let progress = timing(timeFraction);

                node.style.left = `${progress * offSet}px`;
                if (timeFraction < 1) {
                  requestAnimationFrame(openDrawerAnimation);
                }
              }

              requestAnimationFrame(openDrawerAnimation);
            }
            accept();
          }, ratio);
        }))();
    }
  }

  async animateBackWard() {
    const totalOffset = this.getTotalOffset();

    for (let i = this.ref.current.children.length - 1; i > -1; i--) {
      const node = this.ref.current.children.item(i);
      const offSet = node.offsetWidth;
      let ratio = Math.round(
        (this.animationDuration ?? 500 / totalOffset) * offSet
      );

      await (() =>
        new Promise((accept) => {
          let timing = this.timing;
          setTimeout(() => {
            let start = performance.now();
            function openDrawerAnimation(timeStamp) {
              let timeFraction = (start - timeStamp) / ratio;
              if (timeFraction < -1) timeFraction = -1;
              let progress = timing(timeFraction);

              console.log(timeFraction);

              node.style.left = `${progress * offSet}px`;
              if (timeFraction > -1) {
                requestAnimationFrame(openDrawerAnimation);
              }
            }
            requestAnimationFrame(openDrawerAnimation);

            accept();
          }, ratio);
        }))();
    }
  }

  componentDidMount() {
    this.initDrawerComponent();
  }

  RebuildClass() {
    let node = this.ref.current.children;
    let index = this.state.selectedIndex;
    for (let i = 0; i < node.length; i++) {
      if (i === index) {
        console.log("change");
        node.item(i).style.backgroundColor = this.props.className;
      } else {
        node.item(i).className = this.props.className;
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.drawerState !== this.props.drawerState) this.handleDrawer();
    else if (prevState.selectedIndex !== this.state.selectedIndex)
      console.log("test");
    else this.RebuildClass();

  }

  async handleDrawer() {
    if (this.props.drawerState) {
      await this.animateForward();
    } else {
      await this.animateBackWard();
    }
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          zIndex: 100,
          position: "fixed",
          height: "100vh",
        }}
      >
        <div ref={this.ref} style={{ transform: "translateY(15%)" }}></div>
      </div>
    );
  }
}
