$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Systems Analyst",
		"location": "New Haven, CT",
		"datesworked": "2000-Present",	
		"image": "images/ATTPic.jpg",
		"description": ["•	Vendor Management responsibilities include working with AT&T offshore vendors.  Communicating in setting up ID’s, SLA’s, Networking, and Access to AT&T systems.",
"•	Application Support of Production Databases and Web Tools using Access, VB Script, Cold Fusion, HTML and SQL to maintain and update tools for Release Management and Project Management teams.",
"•	Metric reporting for Senior Management to capture a multitude of system information.  System availability, Defects, P1’s, Root Cause, and any other information requested from leadership.  Reporting run through SQL and/or Access queries.",
"•	Business Continuity Plan Steward.  Maintain Operation Business Readiness Plan in case of emergency in our Organization.  Communicate and run test disaster scenarios with leadership.",
"•	RIM (Records and Information Management) Record Agent, which entails working with Application groups and Legal to manage record retention based upon the law. ASPR (AT&T Security Policy and Requirements) Liaison.  The ASPR standards collectively identify policies, responsibilities, and minimum required safeguards for the protection of AT&T information and computing assets.",
"•	Maintain Change Control Board to ensure projects are tested, and approved to be deployed on a scheduled Release.  Coordinate Testing, Development, Project Management and Release Management on all projects in our Organization.",
"•	Admin of Mercury Quality Center tool for Defect Management.  Responsibilities include setting up users, access levels, forms, and workflow through back end via VB script and MQC forms.",
"•	Monitoring Defects to ensure groups are closing out open Defects and meeting their SLA’s.",
"•	Maintain Credit Card payment intranet application using Java Script, VB Script and HTML within ASP pages.",
"•	Create and maintain SQL and Visual Basic applications for reporting and maintenance of system.",
"•	Operational Support of multi- tier client server production intranet application."]



	},
	{
		"employer": "Travelers Insurance",
		"title": "Business Analyst",
		"location": "Hartford, CT",
		"datesworked": "1996-2000",
		"image": "images/Travelers.jpg",
		"description": ["•	Create and maintain VRU modules using Unix, SQL, Conversant, TAS, and Oracle",
"•	Create and maintain Unix Shell scripts for trend analysis",
"•	Operational Support of production VRU applications for Life, LTC, Annuity, and Marketing",
"•	Research and develop advanced voice, call center technologies",
"•	Integrate VRU and other call center technologies with CORBA-based business",
"•	Support Travelers Life and Annuity with monthly version releases of application maintenance",
"•	Created and maintained code in FOCUS for queries to extract data off of annuity mainframe for management reporting, customer mailings, and tax reporting purposes",
"•	Created and maintained programs in Excel to track data for management, including: variances; EMR reporting; and mail merges from data downloaded off of the annuity host",
"•	Created, managed and tested VRU business tasks for upcoming version releases",
"•	Managed, handled, delegated and responded to all Presidential annuity complaints received at Travelers",
"•	Wrote specifications for new Imaging system being implemented for year 2000",
"•	Performed daily client reporting tasks, which included: balancing 1099R system; creating specifications for system version releases; Quarterly Statement enhancements; and testing of new products"]


	},
	{
		"employer": "ITT Hartford",
		"title": "Representative",
		"location": "Simsbury, CT",
		"datesworked": "1991-1996",
		"image": "images/Hartford.jpg",
		"description": ["•	Controlling unit leader for dedicated customer service line and post-issue dollar cost averaging team",
"•	Monitored calls from broker/dealers to ensure representatives provided quality customer service",
"•	Worked with Edward D. Jones compliance department to resolve complaints to our mutual satisfaction",
"•	Responsible for tracking daily telephone statistics which were needed for management review",
"•	ITT Hartford Customer Service Dock-It Award recipient, 1994, 1995",
"•	ITT Hartford Quality Award Nominee, 1993",
"•  Answered approximately 100 calls a day concerning applications of money, enrollment programs, quoting financial figures, and transferring of funds throughout ITT Hartford products",
"•	Calculated distributions on client’s accounts for broker/dealer representatives",
"•	Served as a liaison between broker/dealers and representatives",
"•	Managed multi-million dollar market timer accounts"]


	}
	]
}

	var projects = {
	"projects": [
	{
		"title": "Application Support/Developer",
		"dates_worked": "2012-Present",
		"descripton": "Support Microsoft Access RM Database, with VB Script and SQL. Maintain Users and Pages. Pictures of the applications I support below.",
		"images": ["images/RMTool.png", "images/RMTool2.png"]
		
	},
	{
		"title": "Application Support/Developer",
		"dates_worked": "2012-Present",
		"descripton": "Support Intranet Committ Tool Release management site, update Database with SQL, and maintain pages wth cold fusion, HTML. Maintain Users and Pages. Pictures of the applications I support below.",
		"images": ["images/CommitTool.png", "images/CommitTool2.png"]
	}
	]
}

var bio = {
	"name": "Michael Snyder",
	"role": "Systems Analyst",
	"welcomeMessage": "Welcome and thanks for looking at my Resume and experience, please take a look around the page.",
	"picture": "images/mike.jpg",
	"contacts": {
		"mobile": "860-490-4213",
		"email": "snydermike22@yahoo.com",
		"github": "https://github.com/snydermike22",
		"location": "227 Lucille St, Newington CT 06111 "
			},
	"skills": ["Microsoft Office", "SQL", "HTML", "CSS", "JavaScript", "Unix", "Visual Basic", "ASP", "git", "Github", "Cold Fusion"]
	}

var formattedwelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var fomattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var	formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedMobileEmailLoc = (formattedMobile +formattedEmail + formattedLocation + formattedgithub);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



$("#header").append(formattedMobileEmailLoc);
$("#header").append(fomattedPicture);
$("#header").append(formattedwelcome);


var education = {
	"schools": [
	{
		"name": "University of Connecticut",
		"location": "Storrs, CT",
		"degree": "BA",
		"years": "1986-1990",
		"major": ["Communications", "Marketing"],
		"image": "images/Uconn.jpg",
		"url": "http://www.Uconn.edu"
		},

	{
		"name": "Bulkeley High School",
		"location": "Hartford, CT",
		"degree": "HS Diploma",
		"years": "1982-1986",
		"major": ["College Prep"],	
		"image": "images/Bulkeley.jpg",
		"url": "http://www.bulkeleyhighschool.org/"
	},

	{
		"name": "Udacity",
		"location": "Onlinecourse",
		"degree": "Front End Web Development",
		"years": "2015",
		"major": ["HTML, JavaScript, CSS"],	
		"image": "images/Udacity.png",
		"url": "http://www.Udacity.com"
	}

	]
}

//
if (bio.skills.length > 0) {
	$("#SkillSet").prepend(HTMLskillsStart);

//	for (skill in bio.skills) {
	
//	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
//	$("#SkillSet").append(formattedSkill);
//	}

}

function displayWork() {
	for (job in work.jobs) {
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);

	//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedworkPic = HTMLworkPic.replace("%data%", work.jobs[job].image);

	$(".work-entry:last").prepend(formattedworkPic);

	$(".work-entry:last").append(
		formattedEmployerTitle);

	//Add Dates and Description of job
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesworked);
	$(".work-entry:last").append(formattedDates);

					for (desc in work.jobs[job].description)	{

					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[desc]);
					$(".work-entry:last").append(formattedDescription);
				}
//

//	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
//	$(".work-entry:last").append(formattedDescription);
	
}	
	}

displayWork();


//This is the loop function to read locations in an array.
function locationizer(work_obj) {
var tmpArray = [];
    for (job in work.jobs) {
    var tmpArray2 = work.jobs[job].location;
        tmpArray.push(tmpArray2);
}
return tmpArray; 
}

var work_obj = "";
locationizer(work_obj);

//function to internationalize the Name


function inName(name) {
	
var name = bio.name.trim().split(" ");
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
$("#header").prepend();

return name[0] +" "+ name[1];
}

$('#preheader').prepend(internationalizeButton);

function myFunction() {
//var el = document.getElementById('name');
document.getElementById('name').innerHTML = formattedName;

}


projects.display = function	() {
	//display code goes here
		
for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates_worked);
			$(".project-entry:last").append(formattedProjectDates);
			
			var formattedProjectdescripton = HTMLprojectDescription.replace("%data%", projects.projects[project].descripton);
			$(".project-entry:last").append(formattedProjectdescripton);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);

				}
			}
		}
}

projects.display();

//This is where the Education information goes

education.display = function	() {
	//display code goes here
		
for (edu in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedEdPic = HTMLschoolPic.replace("%data%", education.schools[edu].image);
			$(".education-entry:last").prepend(formattedEdPic);


			var formattednameyears = (education.schools[edu].name + ":      " + education.schools[edu].years);
			formattednameyears = HTMLschoolName.replace("%data%", formattednameyears);
		    $(".education-entry:last").append(formattednameyears);

			var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
			$(".education-entry:last").append(formattedEducationMajor);

			var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			$(".education-entry:last").append(formattedEducationDegree);

			var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedEducationLocation);

			var formattedEducationurl = HTMLonlineURL.replace("%data%", education.schools[edu].url);

			var str = education.schools[edu].url;
    		var result = str.link(education.schools[edu].url);

    		$(".education-entry:last").append(result);

	}
}
education.display();

// This is where the map code goes
$("#mapDiv").append(googleMap);

$("#letsConnect").append(formattedMobileEmailLoc);