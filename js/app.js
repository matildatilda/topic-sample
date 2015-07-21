(function(){

    var topicModule = angular.module('topicModule',[]);

    var articles = 
        [
            { title : 'test tpic1', contents : 'latest programming news!', author : 'matildatilda', dateAt : '2015/07/21' },
            { title : 'test tpic2', contents : 'new release product info.', author : 'matildatilda', dateAt : '2015/07/20' },
        ];
    
    topicModule.controller('topicController',function()
    {
        this.topics = articles;        
    });

})();
