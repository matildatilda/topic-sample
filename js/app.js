(function(){

    var topicModule = angular.module('topicModule',[]);

    var articles = 
    [
        { title : '○○社のIDEがウェブアプリケーションとして今年中にリリース予定', contents : '先週行われたカンファレンスで、○○社のCTOのナントカ氏は、次期IDEが旧来のデスクトップだけでなくウェブアプリケーションとしてもサービスを開始することを明言した。β版は来月公開され、同社のWebサイト上で登録すると無償で使用できる。サービス内容や価格については未定とのこと。', author : 'matildatilda', dateAt : '1438576529703',
            comments: 
            [
                {user: 'user1', comment: 'あとで確認する', commentedAt: '1438576529703'}
            ]
        },
    ];
    
    topicModule.controller('topicController',function()
    {
        this.topics = articles;
        
        this.listIndex = 0;
        this.setListIndex = function(index){
            this.listIndex = index;
        };
        
        this.isListIndex = function(index){
            return (this.listIndex === index);      
        };
    });

    topicModule.controller('commentController', function()
    {
        this.comment = {};
        this.addComment = function(topic)
        {
            this.comment.commentedAt = Date.now();
            topic.comments.push(this.comment);
            this.comment = {};
        };
    });

    topicModule.controller('topicEditController', function()
    {
        this.topic = {};
        this.addTopic = function()
        {
            this.topic.dateAt = Date.now();
            this.topic.comments = [];
            articles.push(this.topic);
            this.topic = {};
        };
    });
    
    topicModule.controller('menuController', function()
    {
        this.menuIndex = 0;
        this.setMenuIndex = function(index)
        {
            this.menuIndex = index;
        };
        
        this.isMenuIndex = function(index)
        {
            return (this.menuIndex === index);
        };    
    });
    
    topicModule.directive('writeTopic', function()
    {
        return {
            restrict: 'E',
            templateUrl: "write-topic.html"
        };
    });
    
    topicModule.directive('topicList', function()
    {
        return {
            restrict: 'E',
            templateUrl: "topic-list.html"
        };
    });
})();
