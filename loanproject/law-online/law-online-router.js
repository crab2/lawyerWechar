/**
 * Created by xieiqng on 2017/6/23.
 */
var ionicapp = angular.module('lawOnline')
ionicapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // 个人中心（个人）
        .state('personalCenter', {
            url: '/personalCenter',
            templateUrl: 'personal-center/personal-center.html'
        })
        // 登录（个人）
        .state('personalCenter.personalLogin', {
            views: {
                'pc': {
                    url: '/personalLogin',
                    templateUrl: 'personal-center/personallogin/personal-login.html',
                    controller: 'personalLogin'
                }
            }
        })
        // 注册（个人）
        .state('personalCenter.personalRegist', {
            views: {
                'pc': {
                    url: '/personalRegist',
                    templateUrl: 'personal-center/personalregist/personalregist.html',
                    // controller:'personalRegist'
                }
            }
        })
        // 我的资料（个人）
        .state('personalCenter.myInfo', {
            views: {
                'pc': {
                    url: '/myInfo',
                    templateUrl: 'personal-center/my-information/my-information.html',
                    // controller:'myInfo'
                }
            }
        })
        // 我听过的问题（个人）
        .state('personalCenter.heardIssue', {
            views: {
                'pc': {
                    url: '/heardIssue',
                    templateUrl: 'personal-center/heard-issue/heard-issue.html',
                    controller: 'heardIssue'
                }
            }
        })
        // 我的订单（个人）
        .state('personalCenter.myOrders', {
            views: {
                'pc': {
                    url: '/myOrders',
                    templateUrl: 'personal-center/my-orders/my-orders.html',
                    controller: 'myOrders'
                }
            }
        })
        // 案件列表（个人）
        .state('personalCenter.caseList', {
            views: {
                'pc': {
                    url: '/caseList',
                    templateUrl: 'personal-center/case-list/case-list.html',
                    controller: 'caseList'
                }
            }
        })
        // 关于平台（个人）
        .state('personalCenter.aboutPlatform', {
            views: {
                'pc': {
                    url: '/aboutPlatform',
                    templateUrl: 'personal-center/about-platform/about-platform.html',
                    controller: 'aboutPlatform'
                }
            }
        })
        // 关于平台（个人）
        .state('personalCenter.setting', {
            views: {
                'pc': {
                    url: '/setting',
                    templateUrl: 'personal-center/setting/setting.html',
                    // controller:'personalSetting'
                }
            }
        })
    // 个人中心律师
        .state('lawyerCenter', {
            url: '/lawyerCenter',
            templateUrl: 'lawyer-center/lawyer-center.html'
        })
        // 我的资料（个人）
        .state('lawyerCenter.myInfo', {
            views: {
                'lc': {
                    url: '/myInfo',
                    templateUrl: 'lawyer-center/my-information/my-information.html',
                    controller:'lawyerInfo'
                }
            }
        })
});