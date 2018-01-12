$(document).ready(function() {
   /*============ Chat sidebar ========*/
  $('.chat-sidebar, .nav-controller, .chat-sidebar a').on('click', function(event) {
      $('.chat-sidebar').toggleClass('focus');
  });

  $(".hide-chat").click(function(){
      $('.chat-sidebar').toggleClass('focus');
  });
  
  var token = "EAACEdEose0cBAFYVeOHAtKRsJKC2mZC6DHZC8NFH4vfslHry8D9Kv2JTAekfxKSR229SSiSSq1Tl44QOb8AnjmAcI9WhUan1PG9L2WMaVuOUe2VfYS7kyYax4zkbHbLrFJ2JEUPAeVWJZAULCbyMFYCaMCkkloo6EcoytqkVswbarMALVJXfMCTS74NtsoZD";
  $.ajax('https://graph.facebook.com/v2.10/825821774138308?fields=birthday,work,education,location,hometown,feed,tagged{from,full_picture,message,link,comments},posts{from,message,story,created_time,comments}&access_token='+token,
              {
               type: 'GET',
               datatype: 'JSON', 
               success: function(response)
                       {
                              var post1_d1 = response.tagged.data[1].comments.data[0].created_time;
                              var post2_d1 = response.posts.data[5].comments.data[0].created_time;
                              var post3_d1 = response.tagged.data[3].comments.data[0].created_time;
                              var post1_d2 = response.tagged.data[1].comments.data[1].created_time;
                              var post2_d2 = response.posts.data[5].comments.data[1].created_time;
                              var post3_d2 = response.tagged.data[3].comments.data[1].created_time;
                              var post1_d3 = response.tagged.data[1].comments.data[2].created_time;
                              var post2_d3 = response.posts.data[5].comments.data[2].created_time;
                              var post1_date1 = post1_d1.slice(0,16);
                              var post1_date2 = post1_d2.slice(0,16);
                              var post1_date3 = post1_d3.slice(0,16);
                              var post2_date1 = post2_d1.slice(0,16);
                              var post2_date2 = post2_d1.slice(0,16);
                              var post2_date3 = post2_d1.slice(0,16);
                              var post3_date1 = post3_d1.slice(0,16);
                              var post3_date2 = post3_d2.slice(0,16);
            

                              $("#post3_video_link").html(response.tagged.data[3].link);

                              $("#my_current_work").html(response.work[0].employer.name);
                              $("#my_former_work").html(response.work[1].position.name);
                              $("#my_former_company").html(response.work[1].employer.name);
                              $("#my_graduation").html(response.education[1].school.name);
                              $("#my_current_location").html(response.location.name);
                              $("#my_hometown").html(response.hometown.name);
                              $("#mydob").html(response.birthday);
                              $("#my_post1_time").html(new Date(response.feed.data[0].created_time));
                              $("#my_post2_time").html(response.posts.data[5].created_time);
                              $("#my_post3_time").html(response.posts.data[3].created_time);
                              $("#my_feed1_data").html(response.feed.data[0].message);
                              $("#my_post2_message").html(response.posts.data[5].message);
                              $("#post1_from").html(response.tagged.data[1].from.name);
                              $("#post2_from").html(response.posts.data[0].from.name);
                              $("#post3_from").html(response.tagged.data[3].from.name);
                              $("#post1_msg").html(response.tagged.data[1].message);
                              $("#post2_msg").html(response.posts.data[5].message);
                              $("#post3_msg").html(response.tagged.data[3].message);
                              $("#post1_comment1_usr1").html(response.tagged.data[1].comments.data[0].from.name);
                              $("#post2_comment1_usr1").html(response.posts.data[5].comments.data[0].from.name);
                              $("#post3_comment1_usr1").html(response.tagged.data[3].comments.data[0].from.name);
                              $("#post1_comment2_usr2").html(response.tagged.data[1].comments.data[1].from.name);
                              $("#post2_comment2_usr2").html(response.posts.data[5].comments.data[1].from.name);
                              $("#post3_comment2_usr2").html(response.tagged.data[3].comments.data[1].from.name);
                              $("#post1_comment3_usr3").html(response.tagged.data[1].comments.data[2].from.name);
                              $("#post1_comment1_usr1_time").html(post1_date1);
                              $("#post2_comment1_usr1_time").html(post2_date1);
                              $("#post3_comment1_usr1_time").html(post3_date1);
                              $("#post1_comment2_usr2_time").html(post1_date1);
                              $("#post2_comment2_usr2_time").html(post2_date2);
                              $("#post3_comment2_usr2_time").html(post3_date2);
                              $("#post1_comment3_usr3_time").html(post1_date3);
                              $("#post1_comment1_usr1_comment").html(response.tagged.data[1].comments.data[0].message);
                              $("#post2_comment1_usr1_comment").html(response.posts.data[5].comments.data[0].message);
                              $("#post3_comment1_usr1_comment").html(response.tagged.data[3].comments.data[0].message);
                              $("#post1_comment2_usr2_comment").html(response.tagged.data[1].comments.data[1].message);
                              $("#post2_comment2_usr2_comment").html(response.posts.data[5].comments.data[1].message);
                              $("#post3_comment2_usr2_comment").html(response.tagged.data[3].comments.data[1].message);
                              $("#post1_comment3_usr3_comment").html(response.tagged.data[1].comments.data[2].message);

                       },
               error: function (request, errorType, errorMessage)
                      {
                          alert(errorType+":"+request.responseJSON.error.message);
                      }
  });

})