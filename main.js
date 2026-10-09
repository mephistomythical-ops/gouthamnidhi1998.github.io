'use strict';
/* All project copy and links can be edited here. */
const drive=id=>`https://drive.google.com/file/d/${id}/view?usp=sharing`;
const projects={

 "alnarp": {
  "kicker": "COURSEWORK · FOODSCAPES 2 · INDIVIDUAL PROPOSAL",
  "title": "Campus Alnarp — Food-Oriented Living Lab",
  "summary": "Exploring how campus landscapes, research facilities and food initiatives could connect production, learning and well-being.",
  "details": [
   [
    "The approach",
    "Literature review, campus observations and stakeholder mapping inform proposals for connecting Alnarp’s existing food-related spaces and activities."
   ],
   [
    "The proposal",
    "Food production, conservation, education and community participation within a shared campus framework. The study considers spatial, administrative and collaborative requirements; these are proposed interventions."
   ]
  ],
  "links": [
   [
    "Read the full report",
    "1gqKvzLjg4SkxTq7PlmLJ-5qSeSFD7Rzt"
   ]
  ]
 },
 "billions": {
  "kicker": "COURSEWORK · FOOD PLANNING · GROUP PROPOSAL",
  "title": "Feeding the Billions — India Food Strategy",
  "summary": "A group strategy linking hunger reduction, healthy diets and food-waste prevention through local food societies in India.",
  "details": [
   [
    "My contribution",
    "Stakeholder strategy, the strategic framework and implementation planning. Group authors: Sonali Basnayaka, Henaka Kulathilake, Tomas Wahlstedt and Goutham Nidhi."
   ],
   [
    "The proposal",
    "Food societies at panchayat level connect collection, redistribution, resource recovery, small enterprises and education. The 2040 horizon is an academic ambition, not adopted government policy or an implemented outcome."
   ]
  ],
  "links": [
   [
    "Read the full report",
    "1BFRcvPEXgW2zcJIy0vFRs7NX5yikj-tq"
   ]
  ]
 },
 "food-waste": {
  "kicker": "COURSEWORK · URBAN AGRICULTURE · INDIVIDUAL ARTICLE",
  "title": "Food Waste — Is Urban Agriculture a Solution?",
  "summary": "A popular-science exploration of how growing closer to people could support waste prevention, local knowledge and nutrient cycling.",
  "details": [
   [
    "The approach",
    "Evidence on food loss and waste is brought together with examples of urban agriculture, household practices and resource recovery for a wider audience."
   ],
   [
    "The perspective",
    "Urban agriculture is one part of a broader response. Its contribution depends on scale, growing and storage practices, policy support and sustained participation. The report explores potential pathways rather than measuring a new intervention."
   ]
  ],
  "links": [
   [
    "Read the full report",
    "1a4THQ3_7BFb57mVUyF91roK_bt2WDiPX"
   ]
  ]
 },
 "midori": {
  "kicker": "COURSEWORK · FOOD PLANNING · INDIVIDUAL ASSESSMENT",
  "title": "MIDORI — A Critical Assessment",
  "summary": "Examining Japan’s sustainable food-system strategy through technology access, stakeholder participation and the relationship between people and place.",
  "details": [
   [
    "The approach",
    "A critical assessment of the strategy’s emphasis on innovation and participation, considering adoption barriers, rural–urban relationships, cultural continuity and consumer affordability."
   ],
   [
    "The argument",
    "Practical support for producers, a meaningful community role and spatial planning could help connect national ambitions with local food systems."
   ]
  ],
  "links": [
   [
    "Read the full report",
    "14f5K5XaigMIALknBaY6A-XFmMQisstzY"
   ]
  ]
 },
 "terroir": {
  "kicker": "COURSEWORK · FOODSCAPES 1 · INDIVIDUAL STUDY",
  "title": "Terroir of Taste",
  "summary": "Comparing Sweden and Kerala to explore how landscape, agriculture and cultural traditions shape the experience of food.",
  "details": [
   [
    "The approach",
    "Literature and examples of fruit, vegetables and dairy explore relationships between environment, food production and culinary culture across Sweden and Kerala."
   ],
   [
    "The perspective",
    "Taste connects place and cultural experience. This is a literature-based comparison, not a controlled sensory experiment."
   ]
  ],
  "links": [
   [
    "Read the full report",
    "10WLwi_q7uHeMZlNzLGQnWpyYQJ3SHgyo"
   ]
  ]
 },
 "tsuruoka": {
  "kicker": "COURSEWORK · FOODSCAPES 2 · INDIVIDUAL CASE STUDY",
  "title": "Tsuruoka — A City as a Living Lab",
  "summary": "Reading a Japanese city’s food culture through heirloom crops, culinary knowledge, food education and community learning.",
  "details": [
   [
    "The approach",
    "A case study of crop preservation, cooking workshops and recipe archives, alongside challenges including farming succession and cultural change."
   ],
   [
    "The perspective",
    "A city-wide living lab provides an interpretive lens for shared learning and collaboration. The study does not claim a separate formal living-lab designation."
   ]
  ],
  "links": [
   [
    "Read the full report",
    "1RD5mfTjvvBFzY3PhMJiLUnaUq8skuCcn"
   ]
  ]
 }
,
 oats:{kicker:'KTH FOOD · RESEARCH · 2026',title:'Oats as a strategic crop',summary:'Exploring the role of oats in a more resilient Swedish food system.',details:[['The question','How could oats contribute to nutrition, domestic production and food-system resilience in Sweden?'],['My contribution','As a Research Assistant at KTH Food, I synthesised national production, climate, trade and yield data, contributed to a strategic framework, and mapped the oat-processing value chain.'],['The approach','Food-system analysis, agricultural policy review and evidence synthesis, complemented by separate production and processing scenarios.'],['The output','A national food-system scenario analysis and supporting research. The linked report presents the analysis; it is not a statement of adopted national policy.']],links:[['Read the oat strategy report','1E2MfZuNYhKjOxwzapaIa3lZCEihoQORY'],['Oat production scenarios','1jIho_CVCw2G44sYqgN2tkgGDtGOOPMaw'],['Oat processing scenarios','1xd77-jf5UZ0JvP0QbPulKdDVzjHMc6oR']]},
 lca:{kicker:'LIFE CYCLE ASSESSMENT · RESEARCH PROPOSAL',title:'Beyond the ingredient',summary:'A comparative framework for investigating the environmental impacts of oat protein.',details:[['The question','How do the carbon footprint and water use of oat protein isolate compare with pea and soy protein isolates?'],['The scope','A proposed attributional, cradle-to-gate LCA with a functional unit of 1 kg of protein ingredient at the factory gate.'],['The approach','The proposal sets out system boundaries, data needs and an OpenLCA/Ecoinvent modelling approach, including exploration of oat protein–polysaccharide intermediates.'],['Status','Research proposal. This portfolio does not present its proposed comparisons as completed results or claim that one ingredient is environmentally superior.']],links:[['Read the LCA proposal','1ZAV2OrZc9nrDq6wzpTswQgwm8SYD8p4w']]},
 lund:{kicker:'LUND MUNICIPALITY · COLLABORATIVE PROPOSAL · 2025',title:'Eat Local Lund',summary:'A strategic proposal to strengthen local food consumption and sustainability in Lund Municipality.',details:[['The question','How can a municipality build stronger relationships between local food production, retailers and residents?'],['The collaboration','A group proposal by Dinesha Rathnayake, Hasara Kumaragama and Goutham Nidhi, submitted to Lund Municipality in January 2025.'],['The approach','Local food-system strategy connecting public engagement, producer–retailer dialogue and sustainable consumption, aligned with Lund’s climate ambitions.'],['The output','A strategic proposal for a stronger local foodscape. It describes recommendations rather than verified implementation outcomes.']],links:[['Read Eat Local Lund','1tg1NJZT2zsd0ccx3VfrEU9DUkSBcz9al']]},
 lingon:{kicker:'URBAN FARM · COLLABORATIVE PROPOSAL · 2024',title:'Lingonträdgård',summary:'A prison-farm concept connecting food production, rehabilitation and circular resource use.',details:[['The setting','An interdisciplinary urban-farming and landscape proposal for Trelleborg Prison, Sweden, within a collaboration between SLU Alnarp and the University of Bologna.'],['The concept','Productive gardens, an orchard and vertical farming integrated with agricultural skills, work training and rehabilitation.'],['The perspective','A shared design approach connecting ecological sustainability with social value, learning and resource cycles.'],['Recognition','ISHS Young Mind Award, as listed in my CV, for the Urban Farm 2024 proposal.']],links:[['Read the Lingonträdgård project','1w8pkTj5KW5TXiXkt4Lc4XvaLZdYkyLvk']]},
 foodscapes:{kicker:'SLU · MASTER’S THESIS · 2025',title:'Evolution of Foodscapes',summary:'A case study exploring how Kerala’s food environments and food culture change through time.',details:[['The question','How have production, marketplaces and food culture evolved in Kerala—and what might that mean for future foodscapes?'],['The methods','A mixed-methods approach combining literature review, on-site observation and a survey.'],['The focus','Connections between staple crops, fishing, homesteads, market change, cultural practices and contemporary food environments.'],['The contribution','The thesis proposes a hybrid perspective in which traditional knowledge and modern practices can support more sustainable future foodscapes.']],links:[['Read the Food Studies thesis','1RdFJ2WGF6FSZkdwODqrxM3HXlhTmHK36']]},
 scenarios:{kicker:'KTH FOOD · SCENARIO MODELLING · 2026',title:'Possible futures for oats',summary:'Two scenario studies exploring uncertainty across Swedish oat production and processing.',details:[['Production scenarios','A PESTLE-informed 2 × 2 framework built around precipitation stability and market orientation: oats for human food or animal feed.'],['Processing scenarios','A separate 2 × 2 framework examining plant-based demand and export growth alongside policy and institutional support.'],['Why scenarios?','They make strategic uncertainties explicit and provide distinct futures for discussion. They are exploratory scenarios, not forecasts or assigned probabilities.'],['The output','Two linked reports connecting climate, markets and policy to the possible development of the Swedish oat value chain.']],links:[['Read oat production scenarios','1jIho_CVCw2G44sYqgN2tkgGDtGOOPMaw'],['Read oat processing scenarios','1xd77-jf5UZ0JvP0QbPulKdDVzjHMc6oR']]}
};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=reducedMotion.matches;
let scene;
try{scene=new window.LivingScene($('#living-scene'));}catch(e){document.body.classList.add('webgl-fallback');console.warn('Decorative WebGL scene unavailable:',e.message);}
function setMotion(paused){motionPaused=paused;document.body.classList.toggle('motion-paused',paused);$('#motion-toggle').setAttribute('aria-pressed',String(paused));$('#motion-toggle').setAttribute('aria-label',paused?'Play visual motion':'Pause visual motion');$('.motion-icon').textContent=paused?'▷':'Ⅱ';$('.motion-text').textContent=paused?'Play motion':'Pause motion';if(scene)scene.setPaused(paused);document.documentElement.style.scrollBehavior=paused?'auto':'';}
setMotion(motionPaused);$('#motion-toggle').addEventListener('click',()=>setMotion(!motionPaused));reducedMotion.addEventListener('change',e=>setMotion(e.matches));
const mobileMenu=$('#mobile-nav'),menuButton=$('.menu-toggle');
function closeMenu(){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');}
menuButton.addEventListener('click',()=>{const opening=mobileMenu.hidden;mobileMenu.hidden=!opening;menuButton.setAttribute('aria-expanded',String(opening));menuButton.setAttribute('aria-label',opening?'Close navigation':'Open navigation');});
$$('#mobile-nav a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const projectDialog=$('#project-dialog');let returnFocus=null;
function openDialog(dialog,trigger){returnFocus=trigger;dialog.showModal();document.body.classList.add('dialog-open');dialog.scrollTop=0;dialog.querySelector('.dialog-close').focus();}
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];$('#dialog-kicker').textContent=p.kicker;$('#dialog-title').textContent=p.title;$('#dialog-summary').textContent=p.summary;const details=$('#dialog-details');details.replaceChildren();p.details.forEach(([heading,copy])=>{const section=document.createElement('section'),h=document.createElement('h3'),text=document.createElement('p');h.textContent=heading;text.textContent=copy;section.append(h,text);details.append(section);});const links=$('#dialog-links');links.replaceChildren();p.links.forEach(([label,id])=>{const a=document.createElement('a'),tag=document.createElement('span');a.href=drive(id);a.target='_blank';a.rel='noopener noreferrer';a.textContent=label;tag.textContent='Open report';a.append(tag);links.append(a);});openDialog(projectDialog,button);}));
$$('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');returnFocus?.focus({preventScroll:true});});});
$('#credits-open').addEventListener('click',e=>openDialog($('#credits-dialog'),e.currentTarget));
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const f=button.dataset.filter;$$('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let count=0;$$('[data-project]').forEach(card=>{card.hidden=f!=='all'&&card.dataset.category!==f;if(!card.hidden)count++;});$('#coursework-heading').hidden=f!=='all'&&f!=='coursework';$('#filter-status').textContent=`${count} ${count===1?'project':'projects'} shown.`;scheduleScroll();}));
$('#copy-email').addEventListener('click',async()=>{try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText('gouthamnidhi1998@gmail.com');$('#copy-status').textContent='Email copied';}catch{$('#copy-status').textContent='Please select and copy the email address above.';}setTimeout(()=>$('#copy-status').textContent='',5000);});
$('#copyright-year').textContent=new Date().getFullYear();
const perspective=$('#perspective');let lastChapter=-1;
function updateChapter(chapter){if(chapter===lastChapter)return;lastChapter=chapter;$$('.chapter').forEach((el,i)=>{const active=i===chapter;el.classList.toggle('active',active);el.setAttribute('aria-hidden',String(!active));});$$('[data-goto]').forEach((b,i)=>{b.classList.toggle('active',i===chapter);b.setAttribute('aria-pressed',String(i===chapter));});$('#chapter-count').textContent=`0${chapter+1} — 03`;}
$$('[data-goto]').forEach(b=>b.addEventListener('click',()=>{const index=Number(b.dataset.goto),span=perspective.offsetHeight-innerHeight;window.scrollTo({top:perspective.offsetTop+(index+.35)/3*span,behavior:motionPaused?'instant':'smooth'});}));
let scrollScheduled=false;
function scheduleScroll(){if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(updateScroll);}}
function updateScroll(){scrollScheduled=false;const y=scrollY,h=innerHeight,w=innerWidth,range=document.documentElement.scrollHeight-h;$('.progress-line').style.width=`${range>0?y/range*100:0}%`;const top=perspective.offsetTop,span=perspective.offsetHeight-h,progress=Math.max(0,Math.min(1,(y-top)/span));const chapter=Math.min(2,Math.floor(progress*3));updateChapter(chapter);const inPerspective=y>top-h&&y<top+perspective.offsetHeight;const atHero=y<h+100;const atContact=y>$('#contact').offsetTop-h;let layout,morph;
 if(w<700){layout=[.03,-.22,.39];if(inPerspective)layout=[.06,-.25,.34];if(atContact)layout=[.1,-.02,.9];}
 else{layout=[w/h*.24,-.025,.72];if(inPerspective)layout=[w/h*.24,-.01,.74];if(atContact)layout=[0,0,1.25];}
 morph=inPerspective?chapter:0;if(scene)scene.setState({morph,layout,active:atHero||inPerspective||atContact});}
addEventListener('scroll',scheduleScroll,{passive:true});addEventListener('resize',scheduleScroll,{passive:true});updateScroll();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});document.body.classList.add('js-reveals');$$('.reveal').forEach(el=>observer.observe(el));}
