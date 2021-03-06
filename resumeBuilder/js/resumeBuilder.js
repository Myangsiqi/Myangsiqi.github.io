var bio={
      "name": "杨思奇",
      "role": "前端工程师",
      "contacts": {
        "mobile":"18361222039",
 		"email":"807218717@qq.com", 
        "github": "https://github.com/Myangsiqi",
        "location": "china university of mining and technology"
       },
     "welcomeMessage": "在光滑的冰面上容易摔倒，是因为上面没有坎坷" ,
     "skills":["HTML","CSS","js","jQuery","Bootstrap","Canvas"],
     "biopic": "images/2.JPG"
}

var formattedName= HTMLheaderName.replace(
 	"%data%",bio.name);
var formattedRole= HTMLheaderRole.replace(
 	"%data%",bio.role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

var foremail=HTMLemail.replace(
 	"%data%",bio.contacts.email)
 $("#topContacts").append(foremail);

var formobile=HTMLmobile.replace(
 	"%data%",bio.contacts.mobile)
 $("#topContacts").append(formobile);

var forGithub=HTMLgithub.replace(
 	"%data%",bio.contacts.github)
 $("#topContacts").append(forGithub);

 //   var forLocation=HTMLlocation.replace(
 // 	"%data%",bio.contacts.location)
 // $("#topContacts").append(forLocation);

var forImages=HTMLbioPic.replace(
 	"%data%",bio.biopic)
 $(".biopic").prepend(forImages);

 var forMsg=HTMLwelcomeMsg.replace(
 	"%data%",bio.welcomeMessage)
 $(".welcome").prepend(forMsg);
 
 $("#skills").append(HTMLskillsStart);
 
for (var i = 0; i <= 5; i++) {

 var forSkill=HTMLskills.replace(
 	"%data%",bio.skills[i])
 $("#skills").append(forSkill);
}

var school={
		"name":"中国矿业大学",
		"degree":"本科",
		"major":"信息工程",
		"datas":"2014",
		"location":"china university of mining and technology"
	}

$("#education").append(HTMLschoolStart);

var schoolName=HTMLschoolName.replace(
 	"%data%",school.name);
var schooldDegree=HTMLschoolDegree.replace(
 	"%data%",school.degree); 
var schoolNameTitle=schoolName+schooldDegree;
$(".education-entry").append(schoolNameTitle);

var schoolDatas=HTMLschoolDates.replace(
 	"%data%",school.datas);
$(".education-entry").append(schoolDatas);

var schoolLocation=HTMLschoolLocation.replace(
 	"%data%",school.location);
$(".education-entry").append(schoolLocation);

var schoolMajor=HTMLschoolMajor.replace(
 	"%data%",school.major);
$(".education-entry").append(schoolMajor);


var work= {
	"jobs" :[
	{
		"award":"中国矿业大学",
		"title":"校级二等奖学金",
		"dates":"2016、2017",
		"description":"两次获得"
	},
	{
		"award":"美国大学生数学建模",
		"title":"二等奖",
		"dates":"2017",
		"description":""
	},	
	{
		"award":"Robocup全国机器人竞赛",
		"title":"三等奖",
		"dates":"2017",
		"description":""
	},
	{
		"award":"国际”Digilent FPGA应用设计“竞赛",
		"title":"三等奖",
		"dates":"2017",
		"description":""
	},
	{
		"award":"江苏省五一建模大赛",
		"title":"三等奖",
		"dates":"2015",
		"description":""
	},
	{
		"award":"中国矿业大学电子设计大赛一等奖 ",
		"title":"一等奖",
		"dates":"2017",
		"description":""
	},
	{
		"award":"中国矿业大学智能车大赛一等奖",
		"title":"一等奖",
		"dates":"2017",
		"description":""
	},
	{
		"award":"中国矿业大学计算机软硬件知识竞赛一等奖",
		"title":"一等奖",
		"dates":"2017",
		"description":""
	},
	{
		"award":"中国矿业大学电子初识与焊接一等奖",
		"title":"一等奖",
		"dates":"2016",
		"description":""
	}
]
}


  for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var forAward=HTMLworkEmployer.replace(
		"%data%",work.jobs[job].award);
	var forTitle=HTMLworkTitle.replace(
		"%data%",work.jobs[job].title);
	var forEmployerTitle=forAward+forTitle;
	$(".work-entry:last").append(
		forEmployerTitle);
	
	var forWorkDates=HTMLworkDates.replace(
		"%data%",work.jobs[job].dates)
	$(".work-entry:last").append(forWorkDates);

	var forWorkDescription=HTMLworkDescription.replace(
		"%data%",work.jobs[job].description)
	$(".work-entry:last").append(forWorkDescription);
  }


// for(job in work.jobs){
// 	var forWorkDates=HTMLworkDates.replace(
// 		"%data%",work.jobs[job].dates)
// 	$(".work-entry").append(
// 		forWorkDates);
// }


var projects={
	"projects":[
	{
		"title":"动物卡片",
		"dates":"2017",
		"description":"利用HTML和CSS根据设计原型创意地设置网页样式",
		"images":["images/1.png"]
	},
	{
		"title":"作品集",
		"dates":"2017",
		"description":"利用HTML和CSS将设计原型转换成符合W3C标准的静态页面,<br>运用了FlexBox和响应式页面设计技术",
		"images":["images/2.png"]
	},
	{
		"title":"小游戏",
		"dates":"2017",
		"description":"运用面向对象的编程技巧，在视觉assets和游戏内循环引擎的基础上添加交互对象如玩家和敌人实例<br>综合运用了Javascript、Canvas等技术，通过原型链来管理对象属性，创建架构合理且性能完备的应用项目，并编写README文档",
		"images":["images/3.png"]
	}
  ]
}

projects.display=function(){
	for(project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var forTitle=HTMLprojectTitle.replace(
		"%data%",projects.projects[project].title);
	$(".project-entry:last").append(
		forTitle);
	var forDates=HTMLprojectDates.replace(
		"%data%",projects.projects[project].dates);
	$(".project-entry:last").append(
		forDates);
	var forDescription=HTMLprojectDescription.replace(
		"%data%",projects.projects[project].description);
	$(".project-entry:last").append(
		forDescription);
	if (projects.projects[project].images.length>0){
		for(image in projects.projects[project].images){
			var forImage=HTMLprojectImage.replace(
			"%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(forImage);
		}
	}
  }
}
$("#mapDiv").append(googleMap);
projects.display();



