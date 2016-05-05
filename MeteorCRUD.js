if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY",
  });
  Template.body.helpers({
    panels : [
      {text: "첫번째 게시판"},
      {text: "두번째 게시판"},
      {text: "세번째 게시판"}
    ],
    lists : [
      {
        count: 0,
        title : "테스트 글입니다.",
        date : "2016-04-28"
      },
      {
        count: 0,
        title : "테스트 글입니다.",
        date : "2016-04-28"
      },
      {
        count: 0,
        title : "테스트 글입니다.",
        date : "2016-04-28"
      }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
