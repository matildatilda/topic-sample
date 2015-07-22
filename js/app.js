(function(){

    var topicModule = angular.module('topicModule',[]);

    var articles = 
        [
            { title : 'test tpic1', contents : 'latest programming news!', author : 'matildatilda', dateAt : '2015/07/21',
                comments: 
                [
                    {user: 'guest1', comment: 'this is good news!', commentedAt: '2015/7/22'},
                    {user: 'guest2', comment: 'I douput it.', commentedAt: '2015/7/23'},
                ]
            },
            { title : 'test tpic2', contents : 'new release product info.', author : 'matildatilda', dateAt : '2015/07/20',
                comments: 
                [
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

    topicModule.controller('topicListController', function()
    {
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
        this.addComment = function(topic){
            this.comment.commentedAt = Date.now();
            topic.comments.push(this.comment);
            this.comment = {};
        };
    });

})();
