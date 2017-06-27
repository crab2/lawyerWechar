/**
 * Created by xieiqng on 2017/6/23.
 */
angular.module('lawOnline', ['ionic'])
    .controller('MyCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.toggleRight = function () {
            console.log($ionicSideMenuDelegate)
            $ionicSideMenuDelegate.toggleRight();
        };
    })
    .controller('personalLogin', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('personal-center/personallogin/user-agreement.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
    })
    .controller('heardIssue', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('personal-center/heard-issue/heard-issue-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
    })
    // 我的订单
    .controller('myOrders', function ($scope, $ionicModal) {
        // 支付
        $ionicModal.fromTemplateUrl('personal-center/my-orders/pay-now.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        // 悬赏订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/reward-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.rewardDetials = modal;
        });
        // 电话订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/phone-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.phoneDetials = modal;
        });
        // 会见订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/meeting-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.meetingDetials = modal;
        });
        // 律师见证订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/lawyer-witness-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.lawyerWitnessDetials = modal;
        });
        // 律师调解订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/lawyer-mediation-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.lawyerMediationDetials = modal;
        });
        // 律师函订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/lawyer-letter-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.lawyerletterDetials = modal;
        });
        // 合同审查订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/examination-contract-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.examinationDetials = modal;
        });
        // 起草合同订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/draft-contract-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.draftDetials = modal;
        });
        // 下载合同订单详情
        $ionicModal.fromTemplateUrl('personal-center/my-orders/order-details-modal/download-contract-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.downloadDetials = modal;
        });

    })
    // 案件列表
    .controller('caseList', function ($scope, $ionicModal) {
        // case详情
        $ionicModal.fromTemplateUrl('personal-center/case-list/case-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.caseListmodal = modal;
        });
        // img详情
        $ionicModal.fromTemplateUrl('personal-center/case-list/imgs-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.imgmodal = modal;
        });
        // img详情
        $ionicModal.fromTemplateUrl('personal-center/case-list/release-case.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.releasemodal = modal;
        });
    })
    //关于平台
    .controller('aboutPlatform', function ($scope, $ionicModal) {
        // 使用向导
        $ionicModal.fromTemplateUrl('personal-center/about-platform/use-guide.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.useGuidemodal = modal;
        });
        // 关于平台
        $ionicModal.fromTemplateUrl('personal-center/about-platform/about-platform-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.aboutPlatformmodal = modal;
        });
    })




    // 律师中心
    //关于平台
    .controller('pastCase', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('lawyer-center/pastCase/detalis.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.detailsmodal = modal;
        });
        $ionicModal.fromTemplateUrl('lawyer-center/pastCase/post-case.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.postcasemodal = modal;
        });
    })
    // 我的订单
    .controller('lawyerOrders', function ($scope, $ionicModal) {
        // 支付
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/pay-now.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        // 悬赏订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/reward-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.rewardDetials = modal;
        });
        // 电话订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/phone-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.phoneDetials = modal;
        });
        // 会见订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/meeting-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.meetingDetials = modal;
        });
        // 律师见证订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/lawyer-witness-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.lawyerWitnessDetials = modal;
        });
        // 律师调解订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/lawyer-mediation-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.lawyerMediationDetials = modal;
        });
        // 律师函订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/lawyer-letter-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.lawyerletterDetials = modal;
        });
        // 合同审查订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/examination-contract-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.examinationDetials = modal;
        });
        // 起草合同订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/draft-contract-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.draftDetials = modal;
        });
        // 下载合同订单详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-orders/order-details-modal/download-contract-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.downloadDetials = modal;
        });

    })

    //我的钱包
    .controller('myWallet', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('lawyer-center/my-wallet/money-back.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.moneybackmodal = modal;
        });

    })
    // 案件列表
    .controller('lawyerCaseList', function ($scope, $ionicModal) {
        // case详情
        $ionicModal.fromTemplateUrl('lawyer-center/case-list/case-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.caseListmodal = modal;
        });
        // img详情
        $ionicModal.fromTemplateUrl('lawyer-center/case-list/imgs-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.imgmodal = modal;
        });
    })
    // 我的代办
    .controller('lawyerAgency', function ($scope, $ionicModal) {
        // 支付
        $ionicModal.fromTemplateUrl('lawyer-center/my-agency/pay-now.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        // 发布代办
        $ionicModal.fromTemplateUrl('lawyer-center/my-agency/order-details-modal/post-agency.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.postagency = modal;
        });
        // 代办详情
        $ionicModal.fromTemplateUrl('lawyer-center/my-agency/order-details-modal/agency-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.agencyDetials = modal;
        });
        // 代办详情(应征代办)
        $ionicModal.fromTemplateUrl('lawyer-center/my-agency/order-details-modal/for-agency-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.foragencyDetials = modal;
        });
    })

    //关于平台
    .controller('lawyerAboutPlatform', function ($scope, $ionicModal) {
        // 使用向导
        $ionicModal.fromTemplateUrl('lawyer-center/about-platform/use-guide.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.useGuidemodal = modal;
        });
        // 关于平台
        $ionicModal.fromTemplateUrl('lawyer-center/about-platform/about-platform-details.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.aboutPlatformmodal = modal;
        });
    })