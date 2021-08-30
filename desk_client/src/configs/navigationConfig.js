import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    navLink: "/"
  },

  {
    type: "groupHeader",
    groupTitle: "Example"
  },

  {
    id: "formLayouts",
    title: "Form Layouts",
    type: "item",
    icon: <Icon.Box size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/forms/layout/form-layout"
  },
  {
    id:"countryLayouts",
    title:"Contry Layouts",
    type:"item",
    icon: <Icon.Box size={20} />,
    permissions: ["admin", "editor"],
    navLink: "desk_client/components/"
  }
  ,
  
]

export default navigationConfig
