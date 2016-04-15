$('document').ready(function() {
    //使用单例模式创建代码块，建立个多个模块，来规范书写的代码，在修改或删除时易于查找并进行操作!易于管理和维护！
    //名字为a的小型DOM绑定事件代码库
    var Bindingevent = (function() {
            return {
                initial:function(){
                    this.Mouseenter._init();
                    this.Mouseleave._init();
                    this.Mouseover._init();
                    this.Click._init();
                },
                //当鼠标指针穿过
                Mouseenter: {
                    _init: function() {
                        this._int();
                    },
                    //穿过类名为'int的按钮'
                    _int: function() {
                        $('.int').mouseenter(function() {
                            $('.int').hide();
                            $('.menu-father').show();
                        });
                    }
                },
                //当鼠标离开
                Mouseleave: {
                    _init: function() {
                        this.menu_father();
                        this.nav_set();
                        this.nav_user();
                        this.config2();
                        this.mynav();
                        this.web_site_article();
                    },
                    //离开'更多产品栏'
                    menu_father: function() {
                        $('.menu-father').mouseleave(function() {
                            $('.int').show();
                            $('.menu-father').hide();
                        });
                    },
                    //离开'设置'按钮
                    nav_set: function() {
                        $('#nav-set').mouseleave(function() {
                            $('#search-set').hide();
                        });
                    },
                    //离开'用户'按钮
                    nav_user: function() {
                        $('#nav-user').mouseleave(function() {
                            $('#user-down').hide();
                        });
                    },
                    config2: function() {
                        $('#config2').mouseleave(function() {
                            $('#config2').hide().siblings().show();
                        });
                    },
                    mynav: function() {
                        $('.mynav').mouseleave(function() {
                            $('.mynav p').hide();
                        });
                    },
                    web_site_article: function() {
                        $('.web-site-article').mouseleave(function() {
                            $(this).find('.banner').hide();
                        });
                    }
                },
                //当鼠标位于
                Mouseover: {
                    _init: function() {
                        this.nav_set();
                        this.nav_user();
                        this.config();
                        this.mynav();
                        this.web_site_article();
                    },
                    //位于'设置'按钮
                    nav_set: function() {
                        $('#nav-set').mouseover(function() {
                            $('#search-set').show();
                        });
                    },
                    //位于'用户'按钮
                    nav_user: function() {
                        $('#nav-user').mouseover(function() {
                            $('#user-down').show();
                        });
                    },
                    //替换按钮图片
                    config: function() {
                        $('#config').mouseover(function() {
                            $('#config').hide().siblings().show();
                        });
                    },
                    mynav: function() {
                        $('.mynav').mouseover(function() {
                            $('.mynav p').show();
                        });
                    },
                    web_site_article: function() {
                        $('.web-site-article').mouseover(function() {
                            $(this).find('.banner').show();
                        });
                    }
                },
                //当鼠标点击
                Click: {
                    _init: function() {
                        this.user_btn1();
                        this.user_btn2();
                        this.user_btn3();
                        this.user_btn4();
                        this.user_btn5();
                    },
                    user_btn1: function() {
                        $('#user-btn1').click(function() {
                            Addstyle.Addclass.user_btn1();
                            $('.myattention').show().siblings().hide();
                        });
                    },
                    user_btn2: function() {
                        $('#user-btn2').click(function() {
                            Addstyle.Addclass.user_btn2();
                            $('.mygroom').show().siblings().hide();
                        });
                    },
                    user_btn3: function() {
                        $('#user-btn3').click(function() {
                            Addstyle.Addclass.user_btn3();
                            $('.web-site').show().siblings().hide();
                        });

                    },
                    user_btn4: function() {
                        $('#user-btn4').click(function() {
                            Addstyle.Addclass.user_btn4();
                            $('.mymovie').show().siblings().hide();

                        });
                    },
                    user_btn5: function() {
                        $('#user-btn5').click(function() {
                            Addstyle.Addclass.user_btn5();
                            $('.mybuy').show().siblings().hide();
                        });
                    }
                }
            }
        })()
        //名为b的小型添加样式的代码库
    var Addstyle = (function() {
        return {
            Addclass: {
                user_btn2: function() {
                    $('#user-btn2').addClass("btn-jsstyle").siblings().removeClass("btn-jsstyle");
                },
                user_btn1: function() {
                    $('#user-btn1').addClass("btn-jsstyle").siblings().removeClass("btn-jsstyle");
                },
                user_btn3: function() {
                    $('#user-btn3').addClass("btn-jsstyle").siblings().removeClass("btn-jsstyle");
                },
                user_btn4: function() {
                    $('#user-btn4').addClass("btn-jsstyle").siblings().removeClass("btn-jsstyle");
                },
                user_btn5: function() {
                    $('#user-btn5').addClass("btn-jsstyle").siblings().removeClass("btn-jsstyle");
                }
            }
        }
    })()
    //绑定事件!
    Bindingevent.initial();
    //添加样式
    Addstyle.Addclass.user_btn2();
});
