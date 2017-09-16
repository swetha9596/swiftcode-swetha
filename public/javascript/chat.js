var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope, $sce){
    $scope.messages = [
    {
      sender:"BOT",
      text:"what can I do for you?",
      time:"1:12 PM"
    },
    {
      sender:"user",
      text:"hi2",
      time:"1:13 PM"
    },
    {
      sender:"BOT",
      text:"hi3",
      time:"1:14 PM"
    },
    {
      sender:"user",
      text:"hi4",
      time:"1:15 PM"
    }
    ];
    $scope.sendMessage = function(){
        exampleSocket.send($scope.userMessage);
        $scope.userMessage = "";
    };

    var exampleSocket = new WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           jsonData.time = new Date().toLocaleTimeString;

           console.log(jsonData);
       };

    $scope.trust = $sce.trustAsHtml;
});