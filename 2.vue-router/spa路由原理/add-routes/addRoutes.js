/**
  addRoutes() 跳转空白，需要刷新一下

  
  菜单栏还是之前的菜单栏，
  没有菜单栏, 路由是有了, 菜单menu值渲染一次, addRoutes后菜单不会变

1.addroute已经成功了，所以可以跳转到新增的路由页。
2.渲染menu不应该遍历路由去生成，因为addroutes后，路由虽然增加了，但路由不是响应数据（未观察，且未订阅），是不会对你的视图触发变化的。

建议解决方案：
使用vuex，对路由信息进行状态管理，把初始的路由数据存到store里，menu依靠store进行渲染及更新，addroutes后再把新增路由push进store存储的路由数组中，即可以触发menu更新。希望能解决你的问题。


addroutes只是在路由里加了新的路由，也就是你可以通过url跳转，
  并不是个你添加新的菜单，加新的菜单还需要你自己根据权限判断，写代码处理


vue路由跳转到同一页面的刷新问题
  页面跳转是同一个路由，传递的参数不同时，页面不刷新
解决方法
  this.$router.push({name: '', query: {}})
  不要用params

问题
  vue 动态加载路由 页面空白，刷新一下后


*/

[
  {
    "id": 1,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 1,
    "name": "order",
    "guard_name": "api",
    "path": "/order",
    "path_name": "order",
    "title": "维修中心",
    "icon": "ios-build",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "维修中心",
      "icon": "ios-build"
    },
    "children": [
      {
        "id": 2,
        "pid": 1,
        "pid_path": "1",
        "menu": true,
        "order": 2,
        "name": "appointment",
        "guard_name": "api",
        "path": "/server/appointment",
        "path_name": "appointment",
        "title": "预约单",
        "icon": "md-text",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "预约单",
          "icon": "md-text"
        }
      },
      {
        "id": 142,
        "pid": 1,
        "pid_path": "",
        "menu": true,
        "order": 3,
        "name": "history",
        "guard_name": "api",
        "path": "/server/history",
        "path_name": "history",
        "title": "维修历史",
        "icon": "md-sync",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "维修历史",
          "icon": "md-sync"
        }
      },
      {
        "id": 166,
        "pid": 1,
        "pid_path": "1",
        "menu": true,
        "order": 1,
        "name": "workorder",
        "guard_name": "api",
        "path": "/server/workorder",
        "path_name": "workorder",
        "title": "接车单",
        "icon": "ios-construct",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "接车单",
          "icon": "ios-construct"
        }
      }
    ]
  },
  {
    "id": 13,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 2,
    "name": "inventory",
    "guard_name": "api",
    "path": "/inventory",
    "path_name": "inventory",
    "title": "仓库管理",
    "icon": "md-leaf",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "children": [
      {
        "id": 10,
        "pid": 13,
        "pid_path": "13",
        "menu": true,
        "order": 1,
        "name": "purchase-order",
        "guard_name": "api",
        "path": "/purchase/purchase-order",
        "path_name": "purchase-order",
        "title": "采购订单",
        "icon": "ios-paper-outline",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购订单",
          "icon": "ios-paper-outline"
        }
      },
      {
        "id": 15,
        "pid": 13,
        "pid_path": "13",
        "menu": true,
        "order": 4,
        "name": "inbound",
        "guard_name": "api",
        "path": "inbound",
        "path_name": "inbound",
        "title": "入库单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "入库单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 16,
        "pid": 13,
        "pid_path": "13",
        "menu": true,
        "order": 3,
        "name": "outbound",
        "guard_name": "api",
        "path": "outbound",
        "path_name": "outbound",
        "title": "出库单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "出库单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 73,
        "pid": 13,
        "pid_path": "13",
        "menu": true,
        "order": 99,
        "name": "supplier",
        "guard_name": "api",
        "path": "supplier",
        "path_name": "supplier",
        "title": "供货商",
        "icon": "ios-people",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "供货商",
          "icon": "ios-people"
        }
      },
      {
        "id": 80,
        "pid": 13,
        "pid_path": "13",
        "menu": true,
        "order": 2,
        "name": "sales",
        "guard_name": "api",
        "path": "sales",
        "path_name": "sales",
        "title": "销售订单",
        "icon": "md-log-out",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售订单",
          "icon": "md-log-out"
        }
      },
      {
        "id": 92,
        "pid": 13,
        "pid_path": "",
        "menu": true,
        "order": 13,
        "name": "query-inventory",
        "guard_name": "api",
        "path": "query-inventory",
        "path_name": "query-inventory",
        "title": "库存查询",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "库存查询",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 122,
        "pid": 13,
        "pid_path": "",
        "menu": true,
        "order": 21,
        "name": "checks",
        "guard_name": "api",
        "path": "checks",
        "path_name": "checks",
        "title": "仓库盘点",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "仓库盘点",
          "icon": "ios-leaf"
        }
      }
    ],
    "meta": {
      "keepAlive": true,
      "title": "仓库管理",
      "icon": "md-leaf"
    }
  },
  {
    "id": 27,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 90,
    "name": "data",
    "guard_name": "api",
    "path": "/data",
    "path_name": "data",
    "title": "数据管理",
    "icon": "ios-stats",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "数据管理",
      "icon": "ios-stats"
    },
    "children": [
      {
        "id": 28,
        "pid": 27,
        "pid_path": "27",
        "menu": true,
        "order": 1,
        "name": "cartype",
        "guard_name": "api",
        "path": "cartype",
        "path_name": "cartype",
        "title": "易损件查询",
        "icon": "ios-search",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "易损件查询",
          "icon": "ios-search"
        }
      },
      {
        "id": 29,
        "pid": 27,
        "pid_path": "27",
        "menu": true,
        "order": 2,
        "name": "model-parts",
        "guard_name": "api",
        "path": "model-parts",
        "path_name": "model-parts",
        "title": "车型件查询",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "车型件查询",
          "icon": "ios-leaf"
        }
      }
    ]
  },
  {
    "id": 31,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 4,
    "name": "chart",
    "guard_name": "api",
    "path": "/chart",
    "path_name": "chart",
    "title": "经营报表",
    "icon": "ios-pie",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "经营报表",
      "icon": "ios-pie"
    },
    "children": [
      {
        "id": 34,
        "pid": 31,
        "pid_path": "31",
        "menu": true,
        "order": 4,
        "name": "repurchase",
        "guard_name": "api",
        "path": "/chart/repurchase",
        "path_name": "repurchase",
        "title": "采购报表",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购报表",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 35,
        "pid": 31,
        "pid_path": "31",
        "menu": true,
        "order": 2,
        "name": "refinance",
        "guard_name": "api",
        "path": "/chart/refinance",
        "path_name": "refinance",
        "title": "财务报表",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "财务报表",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 182,
        "pid": 31,
        "pid_path": "31",
        "menu": true,
        "order": 3,
        "name": "resales",
        "guard_name": "api",
        "path": "/chart/resales",
        "path_name": "resales",
        "title": "销售报表",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售报表",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 185,
        "pid": 31,
        "pid_path": "31",
        "menu": true,
        "order": 1,
        "name": "reday",
        "guard_name": "api",
        "path": "/chart/reday",
        "path_name": "reday",
        "title": "营业日报",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "营业日报",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 186,
        "pid": 31,
        "pid_path": "31",
        "menu": true,
        "order": 5,
        "name": "reserve",
        "guard_name": "api",
        "path": "reserve",
        "path_name": "reserve",
        "title": "维修报表",
        "icon": "ios-construct",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "维修报表",
          "icon": "ios-construct"
        }
      },
      {
        "id": 187,
        "pid": 31,
        "pid_path": "31",
        "menu": true,
        "order": 6,
        "name": "reinout",
        "guard_name": "api",
        "path": "reinout",
        "path_name": "reinout",
        "title": "出入库统计",
        "icon": "ios-funnel",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "出入库统计",
          "icon": "ios-funnel"
        }
      }
    ]
  },
  {
    "id": 36,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 3,
    "name": "finance",
    "guard_name": "api",
    "path": "/finance",
    "path_name": "finance",
    "title": "财务管理",
    "icon": "logo-yen",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "财务管理",
      "icon": "logo-yen"
    },
    "children": [
      {
        "id": 39,
        "pid": 36,
        "pid_path": "36",
        "menu": true,
        "order": 0,
        "name": "payable",
        "guard_name": "api",
        "path": "/finance/payable",
        "path_name": "payable",
        "title": "应付账款",
        "icon": "ios-card-outline",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "应付账款",
          "icon": "ios-card-outline"
        }
      },
      {
        "id": 170,
        "pid": 36,
        "pid_path": "36",
        "menu": true,
        "order": 0,
        "name": "receivable",
        "guard_name": "api",
        "path": "/finance/receivable",
        "path_name": "receivable",
        "title": "应收账款",
        "icon": "logo-yen",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "应收账款",
          "icon": "logo-yen"
        }
      }
    ]
  },
  {
    "id": 42,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 12,
    "name": "infos",
    "guard_name": "api",
    "path": "/infos",
    "path_name": "infos",
    "title": "基础资料",
    "icon": "logo-buffer",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "基础资料",
      "icon": "logo-buffer"
    },
    "children": [
      {
        "id": 43,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 1,
        "name": "shop",
        "guard_name": "api",
        "path": "shop",
        "path_name": "shop",
        "title": "门店信息",
        "icon": "ios-home",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "门店信息",
          "icon": "ios-home"
        }
      },
      {
        "id": 45,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 2,
        "name": "material-manager",
        "guard_name": "api",
        "path": "material-manager",
        "path_name": "material-manager",
        "title": "配件管理",
        "icon": "ios-pricetag",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "配件管理",
          "icon": "ios-pricetag"
        }
      },
      {
        "id": 64,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 4,
        "name": "role",
        "guard_name": "api",
        "path": "role",
        "path_name": "role",
        "title": "角色管理",
        "icon": "ios-people-outline",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "角色管理",
          "icon": "ios-people-outline"
        }
      },
      {
        "id": 152,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 8,
        "name": "card-create",
        "guard_name": "api",
        "path": "/basic/card-create",
        "path_name": "card-create",
        "title": "新建计次卡",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建计次卡",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 153,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 7,
        "name": "member-detail",
        "guard_name": "api",
        "path": "/baisc/member-detail",
        "path_name": "member-detail",
        "title": "会员卡详情",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "会员卡详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 154,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 9,
        "name": "card-detail",
        "guard_name": "api",
        "path": "/bisic/card-detail",
        "path_name": "card-detail",
        "title": "计次卡详情",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "计次卡详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 156,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 10,
        "name": "coupon-create",
        "guard_name": "api",
        "path": "/basic/coupon-create",
        "path_name": "coupon-create",
        "title": "新建优惠券",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建优惠券",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 157,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 6,
        "name": "member-create",
        "guard_name": "api",
        "path": "/basic/member-create",
        "path_name": "member-create",
        "title": "新建会员卡",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建会员卡",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 161,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 5,
        "name": "ticket",
        "guard_name": "api",
        "path": "/basic/ticket",
        "path_name": "ticket",
        "title": "卡券设置",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "卡券设置",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 165,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 3,
        "name": "employee",
        "guard_name": "api",
        "path": "/basic/employee",
        "path_name": "employee",
        "title": "员工管理",
        "icon": "ios-people",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "员工管理",
          "icon": "ios-people"
        }
      },
      {
        "id": 169,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 4,
        "name": "project",
        "guard_name": "api",
        "path": "/basic/project",
        "path_name": "project",
        "title": "维修项目",
        "icon": "ios-folder",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "维修项目",
          "icon": "ios-folder"
        }
      },
      {
        "id": 188,
        "pid": 42,
        "pid_path": "42",
        "menu": true,
        "order": 11,
        "name": "coupon-detail",
        "guard_name": "api",
        "path": "/basic/coupon-detail",
        "path_name": "coupon-detail",
        "title": "优惠券详情",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "优惠券详情",
          "icon": "ios-leaf"
        }
      }
    ]
  },
  {
    "id": 76,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 5,
    "name": "customer",
    "guard_name": "api",
    "path": "customer",
    "path_name": "customer",
    "title": "客户管理",
    "icon": "ios-people",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "客户管理",
      "icon": "ios-people"
    },
    "children": [
      {
        "id": 77,
        "pid": 76,
        "pid_path": "76",
        "menu": true,
        "order": 1,
        "name": "car",
        "guard_name": "api",
        "path": "/customer/car",
        "path_name": "car",
        "title": "客户车辆",
        "icon": "ios-car",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "客户车辆",
          "icon": "ios-car"
        }
      },
      {
        "id": 144,
        "pid": 76,
        "pid_path": "76",
        "menu": true,
        "order": 3,
        "name": "vip",
        "guard_name": "api",
        "path": "/customer/vip",
        "path_name": "vip",
        "title": "会员管理",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "会员管理",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 145,
        "pid": 76,
        "pid_path": "76",
        "menu": true,
        "order": 4,
        "name": "vip-detail",
        "guard_name": "api",
        "path": "/customer/vip-detail",
        "path_name": "vip-detail",
        "title": "会员详情",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "会员详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 147,
        "pid": 76,
        "pid_path": "76",
        "menu": true,
        "order": 6,
        "name": "vip-history",
        "guard_name": "api",
        "path": "/customer/vip-history",
        "path_name": "vip-history",
        "title": "办卡记录",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "办卡记录",
          "icon": "ios-leaf"
        }
      }
    ]
  },
  {
    "id": 86,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 99,
    "name": "setting",
    "guard_name": "api",
    "path": "/setting",
    "path_name": "setting",
    "title": "系统设置",
    "icon": "ios-settings",
    "redirect": "permission",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "children": [
      {
        "id": 59,
        "pid": 86,
        "pid_path": "86",
        "menu": true,
        "order": 0,
        "name": "permission",
        "guard_name": "api",
        "path": "permission",
        "path_name": "permission",
        "title": "菜单设置",
        "icon": "md-settings",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "菜单设置",
          "icon": "md-settings"
        }
      },
      {
        "id": 66,
        "pid": 86,
        "pid_path": "86",
        "menu": true,
        "order": 6,
        "name": "dictionary",
        "guard_name": "api",
        "path": "dictionary",
        "path_name": "dictionary",
        "title": "字典管理",
        "icon": "ios-book",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "字典管理",
          "icon": "ios-book"
        }
      },
      {
        "id": 137,
        "pid": 86,
        "pid_path": "",
        "menu": true,
        "order": 0,
        "name": "tenant",
        "guard_name": "api",
        "path": "/setting/tenant",
        "path_name": "tenant",
        "title": "租户设置",
        "icon": "ios-people",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "租户设置",
          "icon": "ios-people"
        }
      }
    ],
    "meta": {
      "keepAlive": true,
      "title": "系统设置",
      "icon": "ios-settings"
    }
  },
  {
    "id": 143,
    "pid": 0,
    "pid_path": "",
    "menu": true,
    "order": 100,
    "name": "market",
    "guard_name": "api",
    "path": "/market",
    "path_name": "market",
    "title": "营销管理",
    "icon": "ios-aperture",
    "redirect": "",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "meta": {
      "keepAlive": true,
      "title": "营销管理",
      "icon": "ios-aperture"
    },
    "children": [
      {
        "id": 146,
        "pid": 143,
        "pid_path": "",
        "menu": true,
        "order": 1,
        "name": "online",
        "guard_name": "api",
        "path": "/market/online",
        "path_name": "online",
        "title": "线上推广",
        "icon": "share",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "线上推广",
          "icon": "share"
        }
      },
      {
        "id": 148,
        "pid": 143,
        "pid_path": "",
        "menu": true,
        "order": 0,
        "name": "plancard",
        "guard_name": "api",
        "path": "plancard",
        "path_name": "plancard",
        "title": "套餐设置",
        "icon": "at",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "套餐设置",
          "icon": "at"
        }
      }
    ]
  },
  {
    "path": "/",
    "name": "index",
    "redirect": "/home",
    "component": {
      "name": "main-app",
      "components": {
        "ShrinkableMenu": {
          "name": "shrinkable-menu",
          "props": {
            "shrink": {
              "default": false
            },
            "menuList": {
              "required": true
            },
            "beforePush": {},
            "openNames": {},
            "theme": {
              "default": "dark"
            }
          },
          "components": {
            "SidebarMenu": {
              "name": "sidebarMenu",
              "props": {
                "menuList": {},
                "iconSize": {
                  "default": 14
                },
                "menuTheme": {
                  "default": "dark"
                },
                "openNames": {}
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "SidebarMenuShrink": {
              "name": "sidebarMenuShrink",
              "props": {
                "menuList": {},
                "iconColor": {
                  "default": "white"
                },
                "menuTheme": {
                  "default": "dark"
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\sidemenu\shrinkable-menu.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "TagsPage": {
          "name": "TagsPage",
          "props": {
            "pageTagsList": {
              "default": [
                {
                  "path": "/home",
                  "name": "home",
                  "meta": {
                    "title": "首页",
                    "icon": "ios-home"
                  }
                }
              ]
            },
            "beforePush": {}
          },
          "computed": {},
          "methods": {},
          "watch": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\tags-page.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "BreadcrumbNav": {
          "name": "BreadcrumbNav",
          "props": {
            "currentPath": {
              "default": [
                {
                  "title": "首页",
                  "path": "/home",
                  "name": "home",
                  "icon": "ios-home"
                }
              ]
            }
          },
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src\views\public\breadcrumb-nav.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "MenuBtn": {
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-4a478c7d",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\public\menu-btn.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Bell": {
          "name": "bell",
          "props": {
            "value": {
              "default": 0
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\user\bell.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "watch": {},
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src\views\Main.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "title": "其他页面",
    "hidden": true,
    "children": [
      {
        "path": "home",
        "name": "home",
        "title": "首页",
        "hidden": false,
        "meta": {
          "keepAlive": false,
          "requireAuth": true,
          "title": "首页",
          "icon": "ios-home-outline"
        }
      },
      {
        "path": "personal",
        "name": "personal",
        "title": "个人中心",
        "hidden": true,
        "meta": {
          "keepAlive": true,
          "requireAuth": true,
          "title": "个人中心",
          "icon": "person"
        }
      },
      {
        "path": "notice",
        "name": "notice",
        "title": "消息中心",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "requireAuth": false,
          "title": "消息中心",
          "icon": "chatbubble-working"
        }
      },
      {
        "id": 98,
        "pid": 15,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "inbound-detail",
        "guard_name": "api",
        "path": "/inventory/inbound-detail",
        "path_name": "inbound-detail",
        "title": "入库单明细",
        "icon": "ios-cart",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "入库单明细",
          "icon": "ios-cart"
        }
      },
      {
        "id": 115,
        "pid": 16,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "other-create",
        "guard_name": "api",
        "path": "/inventory/other-create",
        "path_name": "other-create",
        "title": "其它出库",
        "icon": "paper-airplane",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其它出库",
          "icon": "paper-airplane"
        }
      },
      {
        "id": 117,
        "pid": 16,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "outbound-print",
        "guard_name": "api",
        "path": "/inventory/outbound-print",
        "path_name": "outbound-print",
        "title": "打印出库单",
        "icon": "printer",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "打印出库单",
          "icon": "printer"
        }
      },
      {
        "id": 128,
        "pid": 122,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "checks-detail",
        "guard_name": "api",
        "path": "/inventory/checks-detail",
        "path_name": "checks-detail",
        "title": "盘点单明细",
        "icon": "ios-list",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "盘点单明细",
          "icon": "ios-list"
        }
      },
      {
        "id": 131,
        "pid": 120,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "create-position",
        "guard_name": "api",
        "path": "/inventory/create-position",
        "path_name": "create-position",
        "title": "新建移库单",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建移库单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 133,
        "pid": 120,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "position-detail",
        "guard_name": "api",
        "path": "//inventory/position-detail",
        "path_name": "position-detail",
        "title": "移库单明细",
        "icon": "arrow-swap",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "移库单明细",
          "icon": "arrow-swap"
        }
      },
      {
        "id": 171,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "receivable-detail",
        "guard_name": "api",
        "path": "/finance/receivable-detail",
        "path_name": "receivable-detail",
        "title": "工单结算",
        "icon": "ios-paper",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "工单结算",
          "icon": "ios-paper"
        }
      },
      {
        "id": 172,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "sales-bill",
        "guard_name": "api",
        "path": "/finance/sales-bill",
        "path_name": "sales-bill",
        "title": "销售应收",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售应收",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 173,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "purchase-refund",
        "guard_name": "api",
        "path": "/finance/purchase-refund",
        "path_name": "purchase-refund",
        "title": "采购退款",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购退款",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 174,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "other-income",
        "guard_name": "api",
        "path": "/finance/other-income",
        "path_name": "other-income",
        "title": "其他收入",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其他收入",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 175,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "otherincome-create",
        "guard_name": "api",
        "path": "/finance/otherincome-create",
        "path_name": "otherincome-create",
        "title": "创建收入",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "创建收入",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 176,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-purchase",
        "guard_name": "api",
        "path": "/finance/pay-purchase",
        "path_name": "pay-purchase",
        "title": "采购应付",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购应付",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 177,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-sales",
        "guard_name": "api",
        "path": "/finance/pay-sales",
        "path_name": "pay-sales",
        "title": "销售退款",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售退款",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 178,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-other",
        "guard_name": "api",
        "path": "/finance/pay-other",
        "path_name": "pay-other",
        "title": "其他支出",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其他支出",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 179,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-other-create",
        "guard_name": "api",
        "path": "/finance/pay-other-create",
        "path_name": "pay-other-create",
        "title": "创建支出",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "创建支出",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 127,
        "pid": 122,
        "pid_path": "",
        "menu": false,
        "order": 1,
        "name": "checks-create",
        "guard_name": "api",
        "path": "/inventory/checks-create",
        "path_name": "checks-create",
        "title": "新建盘点单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建盘点单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 74,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 2,
        "name": "materials",
        "guard_name": "api",
        "path": "materials",
        "path_name": "materials",
        "title": "物料分类",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "物料分类",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 93,
        "pid": 10,
        "pid_path": "",
        "menu": false,
        "order": 2,
        "name": "purchase-detail",
        "guard_name": "api",
        "path": "/purchase/purchase-detail",
        "path_name": "purchase-detail",
        "title": "采购单明细",
        "icon": "document-text",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购单明细",
          "icon": "document-text"
        }
      },
      {
        "id": 158,
        "pid": 76,
        "pid_path": "76",
        "menu": false,
        "order": 2,
        "name": "user",
        "guard_name": "api",
        "path": "/customer/user",
        "path_name": "user",
        "title": "客户信息",
        "icon": "ios-person",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "客户信息",
          "icon": "ios-person"
        }
      },
      {
        "id": 75,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 3,
        "name": "materials-brand",
        "guard_name": "api",
        "path": "materials-brand",
        "path_name": "materials-brand",
        "title": "物料品牌",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "物料品牌",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 95,
        "pid": 10,
        "pid_path": "",
        "menu": false,
        "order": 3,
        "name": "purchase-create",
        "guard_name": "api",
        "path": "/purchase/purchase-create",
        "path_name": "purchase-create",
        "title": "新建采购单",
        "icon": "clipboard",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建采购单",
          "icon": "clipboard"
        }
      },
      {
        "id": 110,
        "pid": 16,
        "pid_path": "",
        "menu": false,
        "order": 3,
        "name": "outbound-detail",
        "guard_name": "api",
        "path": "/inventory/outbound-detail",
        "path_name": "outbound-detail",
        "title": "出库单明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "出库单明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 167,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 3,
        "name": "workorder-create",
        "guard_name": "api",
        "path": "/server/workorder-create",
        "path_name": "workorder-create",
        "title": "新建接车单",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建接车单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 51,
        "pid": 5,
        "pid_path": "1,5",
        "menu": false,
        "order": 5,
        "name": "number",
        "guard_name": "api",
        "path": "/server/number",
        "path_name": "number",
        "title": "会员洗车",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "会员洗车",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 168,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 6,
        "name": "workorder-detail",
        "guard_name": "api",
        "path": "/server/workorder-detail",
        "path_name": "workorder-detail",
        "title": "接车单详情",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "接车单详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 139,
        "pid": 76,
        "pid_path": "76",
        "menu": false,
        "order": 7,
        "name": "user-from",
        "guard_name": "api",
        "path": "/customer/user-from",
        "path_name": "user-from",
        "title": "客户来源",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "客户来源",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 180,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 17,
        "name": "receivable-type",
        "guard_name": "api",
        "path": "receivable-type",
        "path_name": "receivable-type",
        "title": "收款分类",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "收款分类",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 181,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 18,
        "name": "pay-type",
        "guard_name": "api",
        "path": "pay-type",
        "path_name": "pay-type",
        "title": "付款分类",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "付款分类",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 120,
        "pid": 13,
        "pid_path": "",
        "menu": false,
        "order": 19,
        "name": "position",
        "guard_name": "api",
        "path": "position",
        "path_name": "position",
        "title": "内部移库",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "内部移库",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 159,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 19,
        "name": "id-type",
        "guard_name": "api",
        "path": "/basic/id-type",
        "path_name": "id-type",
        "title": "证件类型",
        "icon": "ios-card",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "证件类型",
          "icon": "ios-card"
        }
      },
      {
        "id": 121,
        "pid": 13,
        "pid_path": "",
        "menu": false,
        "order": 20,
        "name": "allocation",
        "guard_name": "api",
        "path": "allocation",
        "path_name": "allocation",
        "title": "仓库调拨",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "仓库调拨",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 184,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 20,
        "name": "sales-create",
        "guard_name": "api",
        "path": "/inventory/sales-create",
        "path_name": "sales-create",
        "title": "新建销售单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建销售单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 57,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 21,
        "name": "appointment-create",
        "guard_name": "api",
        "path": "/server/appointment-create",
        "path_name": "appointment-create",
        "title": "新建预约单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建预约单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 141,
        "pid": 42,
        "pid_path": "",
        "menu": false,
        "order": 21,
        "name": "unit",
        "guard_name": "api",
        "path": "/infos/unit",
        "path_name": "unit",
        "title": "计量单位",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "计量单位",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 183,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 21,
        "name": "sales-detail",
        "guard_name": "api",
        "path": "/inventory/sales-detail",
        "path_name": "sales-detail",
        "title": "销售单明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售单明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 151,
        "pid": 1,
        "pid_path": "",
        "menu": false,
        "order": 22,
        "name": "appointment-detail",
        "guard_name": "api",
        "path": "/server/appointment-detail",
        "path_name": "appointment-detail",
        "title": "预约单详情",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "预约单详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 126,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 24,
        "name": "create-rollback",
        "guard_name": "api",
        "path": "/purchase/create-rollback",
        "path_name": "create-rollback",
        "title": "新建退货单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建退货单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 162,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 27,
        "name": "insurer",
        "guard_name": "api",
        "path": "insurer",
        "path_name": "insurer",
        "title": "保险公司",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "保险公司",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 163,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 28,
        "name": "coverage",
        "guard_name": "api",
        "path": "coverage",
        "path_name": "coverage",
        "title": "保险类型",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "保险类型",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 124,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 40,
        "name": "in-sales-detail",
        "guard_name": "api",
        "path": "/inventory/in-sales-detail",
        "path_name": "in-sales-detail",
        "title": "销售退货",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售退货",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 129,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 41,
        "name": "in-order-detail",
        "guard_name": "api",
        "path": "/inventory/in-order-detail",
        "path_name": "in-order-detail",
        "title": "工单退料",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "工单退料",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 5,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 50,
        "name": "wash",
        "guard_name": "api",
        "path": "/server/wash",
        "path_name": "wash",
        "title": "洗车",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "洗车",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 135,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 61,
        "name": "other-detail",
        "guard_name": "api",
        "path": "/inventory/other-detail",
        "path_name": "other-detail",
        "title": "其它出库明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其它出库明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 136,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 62,
        "name": "out-return-detail",
        "guard_name": "api",
        "path": "/inventory/out-return-detail",
        "path_name": "out-return-detail",
        "title": "采购退货明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购退货明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 134,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 63,
        "name": "out-sales-detail",
        "guard_name": "api",
        "path": "/inventory/out-sales-detail",
        "path_name": "out-sales-detail",
        "title": "销售出库明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售出库明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 81,
        "pid": 0,
        "pid_path": "",
        "menu": false,
        "order": 199,
        "name": "other",
        "guard_name": "api",
        "path": "other",
        "path_name": "other",
        "title": "其它页面",
        "icon": "android-home",
        "redirect": "/home",
        "component": {
          "name": "main-app",
          "components": {
            "ShrinkableMenu": {
              "name": "shrinkable-menu",
              "props": {
                "shrink": {
                  "default": false
                },
                "menuList": {
                  "required": true
                },
                "beforePush": {},
                "openNames": {},
                "theme": {
                  "default": "dark"
                }
              },
              "components": {
                "SidebarMenu": {
                  "name": "sidebarMenu",
                  "props": {
                    "menuList": {},
                    "iconSize": {
                      "default": 14
                    },
                    "menuTheme": {
                      "default": "dark"
                    },
                    "openNames": {}
                  },
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "__file": "src\views\sidemenu\sidebar-menu.vue",
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "_Ctor": {}
                },
                "SidebarMenuShrink": {
                  "name": "sidebarMenuShrink",
                  "props": {
                    "menuList": {},
                    "iconColor": {
                      "default": "white"
                    },
                    "menuTheme": {
                      "default": "dark"
                    }
                  },
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "_Ctor": {}
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\sidemenu\shrinkable-menu.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "TagsPage": {
              "name": "TagsPage",
              "props": {
                "pageTagsList": {
                  "default": [
                    {
                      "path": "/home",
                      "name": "home",
                      "meta": {
                        "title": "首页",
                        "icon": "ios-home"
                      }
                    }
                  ]
                },
                "beforePush": {}
              },
              "computed": {},
              "methods": {},
              "watch": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\public\tags-page.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "BreadcrumbNav": {
              "name": "BreadcrumbNav",
              "props": {
                "currentPath": {
                  "default": [
                    {
                      "title": "首页",
                      "path": "/home",
                      "name": "home",
                      "icon": "ios-home"
                    }
                  ]
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\public\breadcrumb-nav.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "MenuBtn": {
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4a478c7d",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\public\menu-btn.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Bell": {
              "name": "bell",
              "props": {
                "value": {
                  "default": 0
                }
              },
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\user\bell.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "watch": {},
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\Main.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "meta": {
          "keepAlive": true,
          "title": "其它页面",
          "icon": "android-home"
        }
      },
      {
        "id": 5,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 50,
        "name": "wash",
        "guard_name": "api",
        "path": "/server/wash",
        "path_name": "wash",
        "title": "洗车",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "洗车",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 51,
        "pid": 5,
        "pid_path": "1,5",
        "menu": false,
        "order": 5,
        "name": "number",
        "guard_name": "api",
        "path": "/server/number",
        "path_name": "number",
        "title": "会员洗车",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "会员洗车",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 57,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 21,
        "name": "appointment-create",
        "guard_name": "api",
        "path": "/server/appointment-create",
        "path_name": "appointment-create",
        "title": "新建预约单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建预约单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 74,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 2,
        "name": "materials",
        "guard_name": "api",
        "path": "materials",
        "path_name": "materials",
        "title": "物料分类",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "物料分类",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 75,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 3,
        "name": "materials-brand",
        "guard_name": "api",
        "path": "materials-brand",
        "path_name": "materials-brand",
        "title": "物料品牌",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "物料品牌",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 81,
        "pid": 0,
        "pid_path": "",
        "menu": false,
        "order": 199,
        "name": "other",
        "guard_name": "api",
        "path": "other",
        "path_name": "other",
        "title": "其它页面",
        "icon": "android-home",
        "redirect": "/home",
        "component": {
          "name": "main-app",
          "components": {
            "ShrinkableMenu": {
              "name": "shrinkable-menu",
              "props": {
                "shrink": {
                  "default": false
                },
                "menuList": {
                  "required": true
                },
                "beforePush": {},
                "openNames": {},
                "theme": {
                  "default": "dark"
                }
              },
              "components": {
                "SidebarMenu": {
                  "name": "sidebarMenu",
                  "props": {
                    "menuList": {},
                    "iconSize": {
                      "default": 14
                    },
                    "menuTheme": {
                      "default": "dark"
                    },
                    "openNames": {}
                  },
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "__file": "src\views\sidemenu\sidebar-menu.vue",
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "_Ctor": {}
                },
                "SidebarMenuShrink": {
                  "name": "sidebarMenuShrink",
                  "props": {
                    "menuList": {},
                    "iconColor": {
                      "default": "white"
                    },
                    "menuTheme": {
                      "default": "dark"
                    }
                  },
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "__file": "src\views\sidemenu\sidebar-menu-shrink.vue",
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "_Ctor": {}
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\sidemenu\shrinkable-menu.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "TagsPage": {
              "name": "TagsPage",
              "props": {
                "pageTagsList": {
                  "default": [
                    {
                      "path": "/home",
                      "name": "home",
                      "meta": {
                        "title": "首页",
                        "icon": "ios-home"
                      }
                    }
                  ]
                },
                "beforePush": {}
              },
              "computed": {},
              "methods": {},
              "watch": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\public\tags-page.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "BreadcrumbNav": {
              "name": "BreadcrumbNav",
              "props": {
                "currentPath": {
                  "default": [
                    {
                      "title": "首页",
                      "path": "/home",
                      "name": "home",
                      "icon": "ios-home"
                    }
                  ]
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src\views\public\breadcrumb-nav.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "MenuBtn": {
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4a478c7d",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\public\menu-btn.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Bell": {
              "name": "bell",
              "props": {
                "value": {
                  "default": 0
                }
              },
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src\views\user\bell.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "watch": {},
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src\views\Main.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "meta": {
          "keepAlive": true,
          "title": "其它页面",
          "icon": "android-home"
        }
      },
      {
        "id": 93,
        "pid": 10,
        "pid_path": "",
        "menu": false,
        "order": 2,
        "name": "purchase-detail",
        "guard_name": "api",
        "path": "/purchase/purchase-detail",
        "path_name": "purchase-detail",
        "title": "采购单明细",
        "icon": "document-text",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购单明细",
          "icon": "document-text"
        }
      },
      {
        "id": 95,
        "pid": 10,
        "pid_path": "",
        "menu": false,
        "order": 3,
        "name": "purchase-create",
        "guard_name": "api",
        "path": "/purchase/purchase-create",
        "path_name": "purchase-create",
        "title": "新建采购单",
        "icon": "clipboard",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建采购单",
          "icon": "clipboard"
        }
      },
      {
        "id": 98,
        "pid": 15,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "inbound-detail",
        "guard_name": "api",
        "path": "/inventory/inbound-detail",
        "path_name": "inbound-detail",
        "title": "入库单明细",
        "icon": "ios-cart",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "入库单明细",
          "icon": "ios-cart"
        }
      },
      {
        "id": 110,
        "pid": 16,
        "pid_path": "",
        "menu": false,
        "order": 3,
        "name": "outbound-detail",
        "guard_name": "api",
        "path": "/inventory/outbound-detail",
        "path_name": "outbound-detail",
        "title": "出库单明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "出库单明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 115,
        "pid": 16,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "other-create",
        "guard_name": "api",
        "path": "/inventory/other-create",
        "path_name": "other-create",
        "title": "其它出库",
        "icon": "paper-airplane",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其它出库",
          "icon": "paper-airplane"
        }
      },
      {
        "id": 117,
        "pid": 16,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "outbound-print",
        "guard_name": "api",
        "path": "/inventory/outbound-print",
        "path_name": "outbound-print",
        "title": "打印出库单",
        "icon": "printer",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "打印出库单",
          "icon": "printer"
        }
      },
      {
        "id": 120,
        "pid": 13,
        "pid_path": "",
        "menu": false,
        "order": 19,
        "name": "position",
        "guard_name": "api",
        "path": "position",
        "path_name": "position",
        "title": "内部移库",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "内部移库",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 121,
        "pid": 13,
        "pid_path": "",
        "menu": false,
        "order": 20,
        "name": "allocation",
        "guard_name": "api",
        "path": "allocation",
        "path_name": "allocation",
        "title": "仓库调拨",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "仓库调拨",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 124,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 40,
        "name": "in-sales-detail",
        "guard_name": "api",
        "path": "/inventory/in-sales-detail",
        "path_name": "in-sales-detail",
        "title": "销售退货",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售退货",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 126,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 24,
        "name": "create-rollback",
        "guard_name": "api",
        "path": "/purchase/create-rollback",
        "path_name": "create-rollback",
        "title": "新建退货单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建退货单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 127,
        "pid": 122,
        "pid_path": "",
        "menu": false,
        "order": 1,
        "name": "checks-create",
        "guard_name": "api",
        "path": "/inventory/checks-create",
        "path_name": "checks-create",
        "title": "新建盘点单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建盘点单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 128,
        "pid": 122,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "checks-detail",
        "guard_name": "api",
        "path": "/inventory/checks-detail",
        "path_name": "checks-detail",
        "title": "盘点单明细",
        "icon": "ios-list",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "盘点单明细",
          "icon": "ios-list"
        }
      },
      {
        "id": 129,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 41,
        "name": "in-order-detail",
        "guard_name": "api",
        "path": "/inventory/in-order-detail",
        "path_name": "in-order-detail",
        "title": "工单退料",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "工单退料",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 131,
        "pid": 120,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "create-position",
        "guard_name": "api",
        "path": "/inventory/create-position",
        "path_name": "create-position",
        "title": "新建移库单",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建移库单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 133,
        "pid": 120,
        "pid_path": "",
        "menu": false,
        "order": 0,
        "name": "position-detail",
        "guard_name": "api",
        "path": "//inventory/position-detail",
        "path_name": "position-detail",
        "title": "移库单明细",
        "icon": "arrow-swap",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "移库单明细",
          "icon": "arrow-swap"
        }
      },
      {
        "id": 134,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 63,
        "name": "out-sales-detail",
        "guard_name": "api",
        "path": "/inventory/out-sales-detail",
        "path_name": "out-sales-detail",
        "title": "销售出库明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售出库明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 135,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 61,
        "name": "other-detail",
        "guard_name": "api",
        "path": "/inventory/other-detail",
        "path_name": "other-detail",
        "title": "其它出库明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其它出库明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 136,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 62,
        "name": "out-return-detail",
        "guard_name": "api",
        "path": "/inventory/out-return-detail",
        "path_name": "out-return-detail",
        "title": "采购退货明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购退货明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 139,
        "pid": 76,
        "pid_path": "76",
        "menu": false,
        "order": 7,
        "name": "user-from",
        "guard_name": "api",
        "path": "/customer/user-from",
        "path_name": "user-from",
        "title": "客户来源",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "客户来源",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 141,
        "pid": 42,
        "pid_path": "",
        "menu": false,
        "order": 21,
        "name": "unit",
        "guard_name": "api",
        "path": "/infos/unit",
        "path_name": "unit",
        "title": "计量单位",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "计量单位",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 151,
        "pid": 1,
        "pid_path": "",
        "menu": false,
        "order": 22,
        "name": "appointment-detail",
        "guard_name": "api",
        "path": "/server/appointment-detail",
        "path_name": "appointment-detail",
        "title": "预约单详情",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "预约单详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 158,
        "pid": 76,
        "pid_path": "76",
        "menu": false,
        "order": 2,
        "name": "user",
        "guard_name": "api",
        "path": "/customer/user",
        "path_name": "user",
        "title": "客户信息",
        "icon": "ios-person",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "客户信息",
          "icon": "ios-person"
        }
      },
      {
        "id": 159,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 19,
        "name": "id-type",
        "guard_name": "api",
        "path": "/basic/id-type",
        "path_name": "id-type",
        "title": "证件类型",
        "icon": "ios-card",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "证件类型",
          "icon": "ios-card"
        }
      },
      {
        "id": 162,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 27,
        "name": "insurer",
        "guard_name": "api",
        "path": "insurer",
        "path_name": "insurer",
        "title": "保险公司",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "保险公司",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 163,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 28,
        "name": "coverage",
        "guard_name": "api",
        "path": "coverage",
        "path_name": "coverage",
        "title": "保险类型",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "保险类型",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 167,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 3,
        "name": "workorder-create",
        "guard_name": "api",
        "path": "/server/workorder-create",
        "path_name": "workorder-create",
        "title": "新建接车单",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建接车单",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 168,
        "pid": 1,
        "pid_path": "1",
        "menu": false,
        "order": 6,
        "name": "workorder-detail",
        "guard_name": "api",
        "path": "/server/workorder-detail",
        "path_name": "workorder-detail",
        "title": "接车单详情",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "接车单详情",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 171,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "receivable-detail",
        "guard_name": "api",
        "path": "/finance/receivable-detail",
        "path_name": "receivable-detail",
        "title": "工单结算",
        "icon": "ios-paper",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "工单结算",
          "icon": "ios-paper"
        }
      },
      {
        "id": 172,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "sales-bill",
        "guard_name": "api",
        "path": "/finance/sales-bill",
        "path_name": "sales-bill",
        "title": "销售应收",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售应收",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 173,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "purchase-refund",
        "guard_name": "api",
        "path": "/finance/purchase-refund",
        "path_name": "purchase-refund",
        "title": "采购退款",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购退款",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 174,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "other-income",
        "guard_name": "api",
        "path": "/finance/other-income",
        "path_name": "other-income",
        "title": "其他收入",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其他收入",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 175,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "otherincome-create",
        "guard_name": "api",
        "path": "/finance/otherincome-create",
        "path_name": "otherincome-create",
        "title": "创建收入",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "创建收入",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 176,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-purchase",
        "guard_name": "api",
        "path": "/finance/pay-purchase",
        "path_name": "pay-purchase",
        "title": "采购应付",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "采购应付",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 177,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-sales",
        "guard_name": "api",
        "path": "/finance/pay-sales",
        "path_name": "pay-sales",
        "title": "销售退款",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售退款",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 178,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-other",
        "guard_name": "api",
        "path": "/finance/pay-other",
        "path_name": "pay-other",
        "title": "其他支出",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "其他支出",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 179,
        "pid": 36,
        "pid_path": "36",
        "menu": false,
        "order": 0,
        "name": "pay-other-create",
        "guard_name": "api",
        "path": "/finance/pay-other-create",
        "path_name": "pay-other-create",
        "title": "创建支出",
        "icon": "",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "创建支出",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 180,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 17,
        "name": "receivable-type",
        "guard_name": "api",
        "path": "receivable-type",
        "path_name": "receivable-type",
        "title": "收款分类",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "收款分类",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 181,
        "pid": 42,
        "pid_path": "42",
        "menu": false,
        "order": 18,
        "name": "pay-type",
        "guard_name": "api",
        "path": "pay-type",
        "path_name": "pay-type",
        "title": "付款分类",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "付款分类",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 183,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 21,
        "name": "sales-detail",
        "guard_name": "api",
        "path": "/inventory/sales-detail",
        "path_name": "sales-detail",
        "title": "销售单明细",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "销售单明细",
          "icon": "ios-leaf"
        }
      },
      {
        "id": 184,
        "pid": 13,
        "pid_path": "13",
        "menu": false,
        "order": 20,
        "name": "sales-create",
        "guard_name": "api",
        "path": "/inventory/sales-create",
        "path_name": "sales-create",
        "title": "新建销售单",
        "icon": "ios-leaf",
        "redirect": "",
        "meta": {
          "keepAlive": true,
          "title": "新建销售单",
          "icon": "ios-leaf"
        }
      }
    ]
  }
]