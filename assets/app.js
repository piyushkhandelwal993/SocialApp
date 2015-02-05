angular.module("app",["ngRoute","ngStorage"]),angular.module("app").controller("PostsCtrl",["$scope","PostService",function(e,t){t.fetchPosts().success(function(t){e.posts=t}),e.addPosts=function(){e.postBody&&t.createPosts({username:"piyush",body:e.postBody,date:new Date}).success(function(t){e.posts.unshift(t),e.postBody=""})}}]),angular.module("app").service("PostService",["$http",function(e){this.fetchPosts=function(){return e.get("/api/posts")},this.createPosts=function(t){return e.post("/api/posts",t)}}]),angular.module("app").service("RegistrationService",["$http",function(e){var t=this;t.registerNewUser=function(t,o){return e.post("/api/users",{username:t,password:o})}}]),angular.module("app").controller("RegisterCtrl",["$scope","RegistrationService","UserService",function(e,t,o){e.registerNewUser=function(n,r){t.registerNewUser(n,r).then(function(t){console.log(t.status),201==t.status&&o.login(n,r).then(function(t){e.$emit("login",t.data)})})}}]),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").controller("ApplicationCtrl",["$scope","$location","$localStorage","UserService","$http",function(e,t,o,n,r){e.$on("login",function(o,n){t.path("/"),e.currentUser=n}),o.token&&(r.defaults.headers.common["x-auth"]=o.token,n.loadLoggedInUser().success(function(t){e.currentUser=t}))}]),angular.module("app").controller("LoginCtrl",["$scope","UserService",function(e,t){e.login=function(o,n){t.login(o,n).then(function(t){e.$emit("login",t.data)})}}]),angular.module("app").service("UserService",["$http","$localStorage",function(e,t){var o=this;o.getUser=function(){return e.get("/api/users",{headers:{"x-auth":this.token}})},o.login=function(n,r){return e.post("/api/sessions",{username:n,password:r}).then(function(n){return o.token=n.data,e.defaults.headers.common["x-auth"]=n.data,t.token=n.data,o.getUser()})},o.loadLoggedInUser=function(){return e.get("/api/users")}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLW1vZHVsZS5qcyIsInBvc3RDdHJsLmpzIiwicG9zdFNlcnZpY2UuanMiLCJyZWdpc3RhcnRpb25TZXJ2aWNlLmpzIiwicmVnaXN0ZXJDdHJsLmpzIiwicm91dGUuanMiLCJ1YXBwbGljYXRpb25DdHJsLmpzIiwidXNlckN0cmwuanMiLCJ1c2VyU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlBvc3RTZXJ2aWNlIiwiZmV0Y2hQb3N0cyIsInN1Y2Nlc3MiLCJwb3N0cyIsImFkZFBvc3RzIiwicG9zdEJvZHkiLCJjcmVhdGVQb3N0cyIsInVzZXJuYW1lIiwiYm9keSIsImRhdGUiLCJEYXRlIiwicG9zdCIsInVuc2hpZnQiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwicnN2YyIsInJlZ2lzdGVyTmV3VXNlciIsInBhc3N3b3JkIiwiUmVnaXN0cmF0aW9uU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImxvZ2luIiwiJGVtaXQiLCJkYXRhIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCIkbG9jYXRpb24iLCIkbG9jYWxTdG9yYWdlIiwiJG9uIiwiXyIsInVzZXIiLCJwYXRoIiwiY3VycmVudFVzZXIiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImxvYWRMb2dnZWRJblVzZXIiLCJzdmMiLCJnZXRVc2VyIiwieC1hdXRoIiwidmFsIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNBLFVBQ0EsY0NGQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxjQUFBLFNBQUFDLEVBQUFDLEdBQ0FBLEVBQUFDLGFBQ0FDLFFBQUEsU0FBQUMsR0FDQUosRUFBQUksTUFBQUEsSUFFQUosRUFBQUssU0FBQSxXQUNBTCxFQUFBTSxVQUNBTCxFQUFBTSxhQUNBQyxTQUFBLFNBQ0FDLEtBQUFULEVBQUFNLFNBQ0FJLEtBQUEsR0FBQUMsUUFDQVIsUUFBQSxTQUFBUyxHQUNBWixFQUFBSSxNQUFBUyxRQUFBRCxHQUNBWixFQUFBTSxTQUFBLFNDZEFULFFBQUFDLE9BQUEsT0FDQWdCLFFBQUEsZUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFkLFdBQUEsV0FDQSxNQUFBYSxHQUFBRSxJQUFBLGVBRUFELEtBQUFULFlBQUEsU0FBQUssR0FDQSxNQUFBRyxHQUFBSCxLQUFBLGFBQUFBLE9DTkFmLFFBQUFDLE9BQUEsT0FDQWdCLFFBQUEsdUJBQUEsUUFBQSxTQUFBQyxHQUNBLEdBQUFHLEdBQUFGLElBQ0FFLEdBQUFDLGdCQUFBLFNBQUFYLEVBQUFZLEdBQ0EsTUFBQUwsR0FBQUgsS0FBQSxjQUNBSixTQUFBQSxFQUNBWSxTQUFBQSxRQ05BdkIsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGdCQUFBLFNBQUEsc0JBQUEsY0FBQSxTQUFBQyxFQUFBcUIsRUFBQUMsR0FDQXRCLEVBQUFtQixnQkFBQSxTQUFBWCxFQUFBWSxHQUNBQyxFQUFBRixnQkFBQVgsRUFBQVksR0FDQUcsS0FBQSxTQUFBQyxHQUNBQyxRQUFBQyxJQUFBRixFQUFBRyxRQUNBLEtBQUFILEVBQUFHLFFBQ0FMLEVBQUFNLE1BQUFwQixFQUFBWSxHQUNBRyxLQUFBLFNBQUFDLEdBQ0F4QixFQUFBNkIsTUFBQSxRQUFBTCxFQUFBTSxjQ1RBakMsUUFBQUMsT0FBQSxPQUNBaUMsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQUFsQyxXQUFBLFlBQUFtQyxZQUFBLGVBQ0FELEtBQUEsYUFBQWxDLFdBQUEsZUFBQW1DLFlBQUEsa0JBQ0FELEtBQUEsVUFBQWxDLFdBQUEsWUFBQW1DLFlBQUEsa0JDTEFyQyxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsbUJBQUEsU0FBQSxZQUFBLGdCQUFBLGNBQUEsUUFBQSxTQUFBQyxFQUFBbUMsRUFBQUMsRUFBQWQsRUFBQVAsR0FDQWYsRUFBQXFDLElBQUEsUUFBQSxTQUFBQyxFQUFBQyxHQUNBSixFQUFBSyxLQUFBLEtBQ0F4QyxFQUFBeUMsWUFBQUYsSUFHQUgsRUFBQU0sUUFDQTNCLEVBQUE0QixTQUFBQyxRQUFBQyxPQUFBLFVBQUFULEVBQUFNLE1BQ0FwQixFQUFBd0IsbUJBQ0EzQyxRQUFBLFNBQUFvQyxHQUNBdkMsRUFBQXlDLFlBQUFGLFFDWEExQyxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLGNBQUEsU0FBQUMsRUFBQXNCLEdBQ0F0QixFQUFBNEIsTUFBQSxTQUFBcEIsRUFBQVksR0FDQUUsRUFBQU0sTUFBQXBCLEVBQUFZLEdBQ0FHLEtBQUEsU0FBQUMsR0FDQXhCLEVBQUE2QixNQUFBLFFBQUFMLEVBQUFNLFlDTEFqQyxRQUFBQyxPQUFBLE9BQ0FnQixRQUFBLGVBQUEsUUFBQSxnQkFBQSxTQUFBQyxFQUFBcUIsR0FDQSxHQUFBVyxHQUFBL0IsSUFDQStCLEdBQUFDLFFBQUEsV0FDQSxNQUFBakMsR0FBQUUsSUFBQSxjQUNBMkIsU0FBQUssU0FBQWpDLEtBQUEwQixVQUdBSyxFQUFBbkIsTUFBQSxTQUFBcEIsRUFBQVksR0FDQSxNQUFBTCxHQUFBSCxLQUFBLGlCQUNBSixTQUFBQSxFQUNBWSxTQUFBQSxJQUNBRyxLQUFBLFNBQUEyQixHQUlBLE1BSEFILEdBQUFMLE1BQUFRLEVBQUFwQixLQUNBZixFQUFBNEIsU0FBQUMsUUFBQUMsT0FBQSxVQUFBSyxFQUFBcEIsS0FDQU0sRUFBQU0sTUFBQVEsRUFBQXBCLEtBQ0FpQixFQUFBQyxhQUdBRCxFQUFBRCxpQkFBQSxXQUNBLE1BQUEvQixHQUFBRSxJQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLFtcblx0J25nUm91dGUnLFxuXHQnbmdTdG9yYWdlJ1xuXHRdKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLGZ1bmN0aW9uKCRzY29wZSwgUG9zdFNlcnZpY2UgKXtcblx0UG9zdFNlcnZpY2UuZmV0Y2hQb3N0cygpXG5cdC5zdWNjZXNzKGZ1bmN0aW9uKCBwb3N0cyApe1xuXHRcdCRzY29wZS5wb3N0cz1wb3N0cztcblx0fSk7XG5cdCRzY29wZS5hZGRQb3N0cyA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KXtcblx0XHRQb3N0U2VydmljZS5jcmVhdGVQb3N0cyh7XG5cdFx0XHR1c2VybmFtZToncGl5dXNoJyxcblx0XHRcdGJvZHkgOiAkc2NvcGUucG9zdEJvZHksXG5cdFx0XHRkYXRlOiBuZXcgRGF0ZSgpXG5cdFx0fSkuc3VjY2VzcyhmdW5jdGlvbiggcG9zdCApe1xuXHRcdFx0JHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdCk7XG5cdFx0XHQkc2NvcGUucG9zdEJvZHk9XCJcIjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUG9zdFNlcnZpY2UnLCBmdW5jdGlvbigkaHR0cCl7XG5cdHRoaXMuZmV0Y2hQb3N0cz1mdW5jdGlvbigpe1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcblx0fTtcblx0dGhpcy5jcmVhdGVQb3N0cz1mdW5jdGlvbihwb3N0KXtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycgLHBvc3QpXG5cdH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKVxuLnNlcnZpY2UoJ1JlZ2lzdHJhdGlvblNlcnZpY2UnLCBmdW5jdGlvbigkaHR0cCl7XG5cdHZhciByc3ZjPXRoaXM7XG5cdHJzdmMucmVnaXN0ZXJOZXdVc2VyID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKXtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2Vycycse1xuXHRcdFx0dXNlcm5hbWU6IHVzZXJuYW1lLFxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXG5cdFx0fSk7XG5cdH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgUmVnaXN0cmF0aW9uU2VydmljZSwgVXNlclNlcnZpY2Upe1xuXHQkc2NvcGUucmVnaXN0ZXJOZXdVc2VyPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpe1xuXHRcdFJlZ2lzdHJhdGlvblNlcnZpY2UucmVnaXN0ZXJOZXdVc2VyKHVzZXJuYW1lLHBhc3N3b3JkKVxuXHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHRpZihyZXNwb25zZS5zdGF0dXM9PTIwMSl7XG5cdFx0XHRcdFVzZXJTZXJ2aWNlLmxvZ2luKCB1c2VybmFtZSwgcGFzc3dvcmQpXG5cdFx0XHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdFx0XHRcdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJyxyZXNwb25zZS5kYXRhKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb25maWcoIGZ1bmN0aW9uICggJHJvdXRlUHJvdmlkZXIpe1xuXHQkcm91dGVQcm92aWRlclxuXHQud2hlbiggJy8nICwgeyBjb250cm9sbGVyOiAnUG9zdHNDdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJ30pXG5cdC53aGVuKCAnL3JlZ2lzdGVyJyAsIHsgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCcgfSlcblx0LndoZW4oICcvbG9naW4nICwgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyB9KVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkN0cmwnLGZ1bmN0aW9uKCRzY29wZSwkbG9jYXRpb24gLCAkbG9jYWxTdG9yYWdlLCBVc2VyU2VydmljZSAsICRodHRwKXtcblx0JHNjb3BlLiRvbignbG9naW4nLGZ1bmN0aW9uKCBfICwgdXNlciApe1xuXHRcdCRsb2NhdGlvbi5wYXRoKFwiL1wiKTtcblx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xuXHR9KTtcblxuXHRpZigkbG9jYWxTdG9yYWdlLnRva2VuKXtcblx0XHQkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoJ109JGxvY2FsU3RvcmFnZS50b2tlbjtcblx0XHRVc2VyU2VydmljZS5sb2FkTG9nZ2VkSW5Vc2VyKClcblx0XHQuc3VjY2VzcyhmdW5jdGlvbiggdXNlcil7XG5cdFx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xuXHRcdH0pO1xuXHR9XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLGZ1bmN0aW9uKCRzY29wZSwgVXNlclNlcnZpY2UgKXtcblx0JHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oIHVzZXJuYW1lLCBwYXNzd29yZCApe1xuXHRcdFVzZXJTZXJ2aWNlLmxvZ2luKCB1c2VybmFtZSwgcGFzc3dvcmQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdCRzY29wZS4kZW1pdCgnbG9naW4nLHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHR9O1xufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnVXNlclNlcnZpY2UnLGZ1bmN0aW9uKCRodHRwICwgJGxvY2FsU3RvcmFnZSl7XG5cdHZhciBzdmMgPSB0aGlzO1xuXHRzdmMuZ2V0VXNlcj0gZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJyx7XG5cdFx0XHRoZWFkZXJzOnsgJ3gtYXV0aCc6IHRoaXMudG9rZW59XG5cdFx0fSk7XG5cdH07XG5cdHN2Yy5sb2dpbj1mdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpe1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuXHRcdFx0dXNlcm5hbWU6IHVzZXJuYW1lLFxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXG5cdFx0fSkudGhlbihmdW5jdGlvbih2YWwpe1xuXHRcdFx0c3ZjLnRva2VuID0gdmFsLmRhdGE7XG5cdFx0XHQkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoJ109IHZhbC5kYXRhO1xuXHRcdFx0JGxvY2FsU3RvcmFnZS50b2tlbj12YWwuZGF0YTtcblx0XHRcdHJldHVybiBzdmMuZ2V0VXNlcigpO1xuXHRcdH0pO1xuXHR9O1xuXHRzdmMubG9hZExvZ2dlZEluVXNlcj1mdW5jdGlvbigpe1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKTtcblx0fVxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9