/**
 * Created by xieiqng on 2017/6/23.
 */
var ionicapp = angular.module('lawOnline')
ionicapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    // 个人中心（个人）
        .state('personalCenter', {
            url: '/personalCenter',
            views: {
                'main': {
                    template: '<ion-nav-view name="pc"></ion-nav-view>',
                    abstract: true
                }
            }
        })
        // 个人中心列表
        .state('personalCenter.centerList', {
            url: '/centerList',
            views: {
                'pc': {
                    templateUrl: 'personal-center/personal-center.html',
                }
            }
        })
        // 登录（个人）
        .state('personalCenter.personalLogin', {
            url: '/personalLogin',
            views: {
                'pc': {
                    templateUrl: 'personal-center/personallogin/personal-login.html',
                    controller: 'personalLogin'
                }
            }
        })
        // 注册（个人）
        .state('personalCenter.personalRegist', {
            url: '/personalRegist',
            views: {
                'pc': {
                    templateUrl: 'personal-center/personalregist/personalregist.html',
                    // controller:'personalRegist'
                }
            }
        })
        // 我的资料（个人）
        .state('personalCenter.myInfo', {
            url: '/myInfo',
            views: {
                'pc': {
                    templateUrl: 'personal-center/my-information/my-information.html',
                    // controller:'myInfo'
                }
            }
        })
        // 我听过的问题（个人）
        .state('personalCenter.heardIssue', {
            url: '/heardIssue',
            views: {
                'pc': {
                    templateUrl: 'personal-center/heard-issue/heard-issue.html',
                    controller: 'heardIssue'
                }
            }
        })
        // 我的订单（个人）
        .state('personalCenter.myOrders', {
            url: '/myOrders',
            views: {
                'pc': {
                    templateUrl: 'personal-center/my-orders/my-orders.html',
                    controller: 'myOrders'
                }
            }
        })
        // 案件列表（个人）
        .state('personalCenter.caseList', {
            url: '/caseList',
            views: {
                'pc': {
                    templateUrl: 'personal-center/case-list/case-list.html',
                    controller: 'caseList'
                }
            }
        })
        // 关于平台（个人）
        .state('personalCenter.aboutPlatform', {
            url: '/aboutPlatform',
            views: {
                'pc': {
                    templateUrl: 'personal-center/about-platform/about-platform.html',
                    controller: 'aboutPlatform'
                }
            }
        })
        // 设置（个人）
        .state('personalCenter.setting', {
            url: '/setting',
            views: {
                'pc': {
                    templateUrl: 'personal-center/setting/setting.html',
                    // controller:'personalSetting'
                }
            }
        })



        // 个人中心
        //
        // 律师
        .state('lawyerCenter', {
            url: '/lawyerCenter',
            views: {
                'main': {
                    template: '<ion-nav-view name="lc"></ion-nav-view>',
                    abstract: true
                }
            }
        })
        // 我的个人中心（律师）
        .state('lawyerCenter.centerList', {
            url: '/centerList',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/lawyer-center.html',
                }
            }
        })
        // 我的资料（律师）
        .state('lawyerCenter.myInfo', {
            url: '/myInfo',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/my-information/my-information.html',
                    // controller:'lawyerInfo'
                }
            }
        })
        // 过往案例（律师）
        .state('lawyerCenter.pastCase', {
            url: '/pastCase',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/pastCase/pastCase.html',
                    controller: 'pastCase'
                }
            }
        })
        // 我的订单（律师）
        .state('lawyerCenter.lawyerOrders', {
            url: '/pastCase',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/my-orders/my-orders.html',
                    controller: 'lawyerOrders'
                }
            }
        })
        // 我的钱包（律师）
        .state('lawyerCenter.myWallet', {
            url: '/myWallet',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/my-wallet/my-wallet.html',
                    controller: 'myWallet'
                }
            }
        })
        .state('lawyerCenter.caseList', {
            url: '/caseList',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/case-list/case-list.html',
                    controller: 'lawyerCaseList'
                }
            }
        })
        // 我的代办（律师）
        .state('lawyerCenter.lawyerAgency', {
            url: '/lawyerAgency',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/my-agency/my-orders.html',
                    controller: 'lawyerAgency'
                }
            }
        })
        // 关于平台（律师）
        .state('lawyerCenter.aboutPlatform', {
            url: '/aboutPlatform',
            views: {
                'lc': {
                    templateUrl: 'personal-center/about-platform/about-platform.html',
                    controller: 'lawyerAboutPlatform'
                }
            }
        })
        // 设置（律师）
        .state('lawyerCenter.setting', {
            url: '/setting',
            views: {
                'lc': {
                    templateUrl: 'lawyer-center/setting/setting.html',
                    // controller:'personalSetting'
                }
            }
        })

        // 个人中心结束


        // 预约咨询模块
        .state('consult', {
            url: '/consult',
            views: {
                'main': {
                    template: '<ion-nav-view name="consult"></ion-nav-view>',
                    abstract: true
                }
            }
        })
        // 预约咨询主页面
        .state('consult.index', {
            url: '/index',
            views: {
                'consult': {
                    templateUrl: 'consult/consult.html',
                }
            }
        })

});