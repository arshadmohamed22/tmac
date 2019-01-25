
	var popup = document.getElementById('Popup');
	var btn1 = document.getElementById("o1");
	var btn2 = document.getElementById("o2");
	var btn3 = document.getElementById("o3");
	var btn4 = document.getElementById("o4");
	var btn5 = document.getElementById("o5");
	var btn6 = document.getElementById("o6");
	var btn7 = document.getElementById("o7");
	var btn8 = document.getElementById("o8");
	var btn9 = document.getElementById("o9");
	var close1 = document.getElementsByClassName("close")[0];

	function closePopup() {
		popup.style.display = "none";
	}

	btn1.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/iqbal.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Iqbal Ali - President</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>Iqbal M. Ali, a Chartered Public Accountant, currently working at City of Toronto for over 25 years as the Director of Financial Management. Iqbal is an active community member and has been volunteering in various community organizations since 1990. He was one of the founding members of Muslim Community Services of Brampton and served in the Board for 15 years. He also served in the Board of Brampton Multicultural Community Services for 15 years, Board Member and Treasurer of Peel Children Aid Society (PCAS) for 6years. Iqbal currently serves as a Multicultural Council Ambassador at World Vision Canada, Board Member of Our Place Peel (a youth shelter agency), and a Board Member of South Asian Canadian Health & Social Services (SACHSS).' +
			'<br><br>' +
			'Iqbal also volunteers as a Mentor for newcomers in the Profession to Profession Mentoring Program since 2004 and in various ad hoc community initiatives and programs. Iqbal is a resident of Brampton since 1990 and is married with three children. He is very passionate about helping communities and making a difference in others life. He has done various community projects through community organizations in the Region of Peel. He is a recipient of Long-Term Service Award from the City of Brampton.</p>';
	}

	btn2.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/abu-becker.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Abu Becker - Vice President</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>Abu Becker is the Chief Executive Officer of Nrich Group, President of Airbond Travel, Vice President- Finance of Indo Canada Chamber of Commerce (ICCC).  He has been appointed as the Canadian representative of SFO Technologies and NEST Group of India. Being a true ambassador of the bilateral relationship between India and Canada, Abu has led 5 Indo Canada Trade Mission alongside Prime Minister, various Mayors, Ministers, MPs, MPPs, Bureaucrats, Policy Makers and Entrepreneurs.  Abu worked closely with South Asian, Middle East as well as the African Multi Cultural communities in Canada, contributed and jointly raised over a million dollars for the Muslim Friends of Osler.' +
			'<br><br>' +
			'At present he is the President of South Asian Canadian Health Services (SACHS) and one of the founding members of the Brampton and Regional Islamic Centre (BARIC). Abu’s vision is to create jobs in Canada, help and educate the less fortunate around the globe. Furthermore, he is also the one of the Multi-Cultural Ambassador with World Vision Canada and assisted in providing support for the Chennai Flood Relief Campaign. Abu believes in cultivating the leaders of tomorrow and has recently been appointed as a business mentor at W Booth School of Engineering in McMaster University. He strongly adheres to his slogan – Learn, Earn, Return.</p>';
	}
	
	btn3.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/haja.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Haja Moinudeen - Secretary</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>Haja is currently working as a Team/Project Lead at AMD, a leading company that develops computing system processors. Prior to this, he has worked at various multinational semiconductor companies in different capacities.' +
			'<br><br>' +
			'He is originally from a village in Thanjavur called Valuthoor in Tamilnadu where he was born and brought up and completed his high school.  He came to Canada as International Student, graduated master’s degree in computer engineering at Concordia University, Montreal in 2006. His undergraduate degree was in Computer & Information Engineering from Malaysia.' +
			'<br><br>' +
			'He has involved in lots of community activities during his university’s days. He was instrumental in forming the Indian Students Association in Malaysia and this association is currently providing services to new Indian students helping them to settle. He has also involved in other clubs in universities and served in different capacities.' +
			'<br><br>' +
			'He immigrated to Canada, Toronto in 2008 for work and since then he has been an active member in TMAC, conducted various events. He was one of the key persons in forming TMAC Sports club.</p>';
	}

	btn4.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/rafi.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Mohamed Rafi - Treasurer</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>He is an Entrepreneurial professional with decades of experiences in different businesses in various industries such as Food & Beverages, Automobile, Tours & Travels, Non for profit and Finance. Rafi was a graduate of B.com from India, migrated to Canada in 1992. He also graduated in Business Accounting in Toronto Shaw College.' + 
			'<br><br>' +
			'Rafi is the founder of Madras Mahal – a South Asian Restaurant, started in 1997 and owned for 11 years.  At present, he is currently the business owner of Prime Halal Meat Distribution, TVS Travels and Cargo, Eastern Exchange Money Transfers based in Toronto. ' +
			'<br><br>' +
			'He was active socially in conducting many events, an active member of TMAC, he was instrumental in initiating the Tamil Heritage Celebration in TMAC.  He was also a RJ in community Radio channels and Director of TNCSC in 2005. He played a key role in the revitalization project for the community affected by Gaja Cyclone in Tamilnadu through fundraising initiative from TMAC.</p>';
	}

	btn5.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/farook.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Farook Tamijuddin - Director of Programs & Services</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>Farook has more than 12 years of experience in non-profit organizations, served in different management capacities. During his non-profit tenure, he worked in various federal, provincial, municipal funded programs such as Employment, Self-Employment for Newcomers, Youth, Internationally Educated professionals.  He played a key role in City of Toronto funded Community Economic Development projects delivered in Resilient Neighbourhoods of Toronto. He was in-charge of Finance for the Chennai Flood Relief campaign in collaboration with World Vision Canada.' + 
			'<br><br>' +
			'During his undergrad, he was a Team leader for National Social Service for community projects in India. He has been active in TMAC for more ten years, at present he is in-charge of strategic planning, programs and services delivery to benefit the community.' +
			'<br><br>' +
			'Farook is the founder & CEO of Grotrend Consultancy which offers Strategic Management System to corporations.  He is a graduate of Master of Business Administration in Marketing & Management Information Systems from University of Madras and Business Strategy from University of Toronto. He is a Certified Management Consultant (CMC), Chairman of CMC-Ontario-GTA Chapter and Council Member of Ontario Institute of Canadian Association for Management Consultants, Vice -Chair for Change Management Special Interest Group.</p>'; 
	}

	btn6.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/nawshath.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Nawshath Ali Sulthan - Director of Sports</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>Nawshath&#39;s nativity can be traced to a small town in Tamil Nadu, near Thanjavur called Agara Podakkudi. Though he is a Malaysian citizen, he spent considerable time of his youth in Chennai which he holds close to his heart. He was doing his Post Graduation in Malaysia and working as an Financial Auditor with EY(Kuala Lumpur) before moving to Canada. He is an expert in the field of Finance, IT Governance and Compliance, and also holds various professional certifications. At social level, he has always been an active participant with social and community clubs since his school days.' + 
			'<br><br>' +
			'He migrated to Canada in the year 2005 and has been an active volunteer with TMAC ever since. His vision was key in the formation, structure and development of TMAC Sports club which he built along with his friends. TMAC sports recently celebrated its 6th annual tournament.</p>';
	}

	btn8.onclick = function() {
		popup.style.display = "block";
		document.getElementById("image-popup").innerHTML = '<img src="../assets/about/raja.jpg">';
		document.getElementById("popup-info").innerHTML = 
			'<h2>Raja Mohamed - Director of Memberships</h2> <hr>' +
			'<!-- EDIT DESCRIPTION HERE -->' +
			'<p>Raja involves actively in various communities and its activities. He is a Member of Canada National Coaching Association of Canada. He is a NCCP Certified Coach specialized in Badminton and Assistant Badminton Coach (in training) at TDSB</p>';
	}
	
