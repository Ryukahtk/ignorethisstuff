var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var pageCount=5;
var displayPageNum=3;
var upPageWord ="<i class='fa fa-angle-left'></i>";
var downPageWord ="<i class='fa fa-angle-right'></i>";

function showpageCount(x){var C=home_page_url;var E=new Array();var y=1;var H=1;var v=0;var p=0;var G=0;var F="";var J="";var w="";for(var z=0,A;A=x.feed.entry[z];z++){var u=A.published.$t.substring(0,19)+A.published.$t.substring(23,29);timestamp=encodeURIComponent(u);var i=A.title.$t;if(i!=""){if(v==0||(v%pageCount==(pageCount-1))){if(C.indexOf(timestamp)!=-1){y=H}if(i!=""){H++}E[E.length]="/search?updated-max="+timestamp+"&max-results="+pageCount}}v++}for(var D=0;D<E.length;D++){if(D>=(y-displayPageNum-1)&&D<(y+displayPageNum)){if(p==0&&D==y-2){if(y==2){J='<span class="showpage"><a href="/">'+upPageWord+"</a></span>"}else{J='<span class="showpage"><a href="'+E[D]+'">'+upPageWord+"</a></span>"}p++}if(D==(y-1)){F+='<span class="showpagePoint">'+y+"</span>"}else{if(D==0){F+='<span class="showpageNum"><a href="/">1</a></span>'}else{F+='<span class="showpageNum"><a href="'+E[D]+'">'+(D+1)+"</a></span>"}}if(G==0&&D==y){w='<span class="showpage"> <a href="'+E[D]+'">'+downPageWord+"</a></span>";G++}}}if(y>1){F=""+J+" "+F+" "}F='<div class="showpageArea">'+F;if(y<(H-1)){F+=w}if(H==1){H++}F+="</div>";var I=document.getElementsByName("pageArea");var B=document.getElementById("blog-pager");if(H<=2){F=""}for(var D=0;D<I.length;D++){I[D].innerHTML=F}if(I&&I.length>0){F=""}if(B){B.innerHTML=F}}function showpageCount2(A){var F=home_page_url;var G=new Array();var J=F.indexOf("/search/label/")!=-1;var M=J?F.substr(F.indexOf("/search/label/")+14,F.length):"";M=M.indexOf("?")!=-1?M.substr(0,M.indexOf("?")):M;var B=1;var L=1;var y=0;var p=0;var K=0;var I="";var P="";var z="";var N='<span class="showpageNum"><a href="/search/label/'+M+"?&max-results="+pageCount+'">';var F=home_page_url;for(var C=0,D;D=A.feed.entry[C];C++){var x=D.published.$t.substring(0,19)+D.published.$t.substring(23,29);timestamp=encodeURIComponent(x);var i=D.title.$t;if(i!=""){if(y==0||(y%pageCount==(pageCount-1))){if(F.indexOf(timestamp)!=-1){B=L}if(i!=""){L++}G[G.length]="/search/label/"+M+"?updated-max="+timestamp+"&max-results="+pageCount}}y++}for(var H=0;H<G.length;H++){if(H>=(B-displayPageNum-1)&&H<(B+displayPageNum)){if(p==0&&H==B-2){if(B==2){P=N+upPageWord+"</a></span>"}else{P='<span class="showpage"><a href="'+G[H]+'">'+upPageWord+"</a></span>"}p++}if(H==(B-1)){I+='<span class="showpagePoint">'+B+"</span>"}else{if(H==0){I=N+"1</a></span>"}else{I+='<span class="showpageNum"><a href="'+G[H]+'">'+(H+1)+"</a></span>"}}if(K==0&&H==B){z='<span class="showpage"> <a href="'+G[H]+'">'+downPageWord+"</a></span>";K++}}}if(B>1){if(!J){I=""+P+" "+I+" "}else{I=""+P+" "+I+" "}}I='<div class="showpageArea">'+I;if(B<(L-1)){I+=z}if(L==1){L++}I+="</div>";var O=document.getElementsByName("pageArea");var E=document.getElementById("blog-pager");if(L<=2){I=""}for(var H=0;H<O.length;H++){O[H].innerHTML=I}if(O&&O.length>0){I=""}if(E){E.innerHTML=I}}var home_page_url=location.href;var thisUrl=home_page_url;if(thisUrl.indexOf("/search/label/")!=-1){if(thisUrl.indexOf("?updated-max")!=-1){var lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"))}else{var lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"))}}var home_page="/";if(thisUrl.indexOf("?q=")==-1){if(thisUrl.indexOf("/search/label/")==-1){document.write('<script src="'+home_page+'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ><\/script>')}else{document.write('<script src="'+home_page+"feeds/posts/full/-/"+lblname1+'?alt=json-in-script&callback=showpageCount2&max-results=99999" ><\/script>')}};

function showRecentComments(e){var t=e.feed.entry,n=parseInt(e.feed.openSearch$totalResults.$t,10),r="",i=tt_cm,s=cm_config_defaults;if(i<n){if(s.alert===true){alert(n-i+s.new_cm)}else if(s.alert===false){document.title="("+(n-i)+s.new_cm+") "+doc_title}else{s.alert(n-i,s.new_cm)}}r='<ul id="recentcomments">';for(var o=0;o<t.length;o++){for(var u=0;u<t[o].link.length;u++){if(t[o].link[u].rel=="alternate"){link=t[o].link[u].href;break}}var a=link.lastIndexOf("/")+1,f=link.lastIndexOf("."),l=link.split("-").join(" ").substring(a,f);author=t[o].author[0],name=author.name.$t,avatar=author.gd$image.src.replace(/\/s[0-9]+(\-c|\/)/,"/s"+s.t_w+"$1").replace(/http\:\/\/www.google.com\/url\?source\=imglanding(.*?)q\=/i,"").replace(/\.(jpg|jpeg|png|bmp|gif)(.*?)$/i,".$1"),profile=author.uri?author.uri.$t:"#nope",date=t[o].gd$extendedProperty[1].value,content="content"in t[o]?t[o].content.$t.replace(/<br ?\/?>/ig," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"",nt=s.new_tab_link?' target="_blank"':"";content=content.length>s.summary?content.substring(0,s.summary)+"&hellip;":content;r+='<li class="recentcomments">';r+=""+name+" on ";r+='<a href="'+link+'" title="'+l+'"'+nt+">"+l+"</a>";r+="";r+="</li>"}r+="</ul>";document.getElementById(s.ct_id).innerHTML=r;_cookie.set("tt_cm",n,7e3);tt_cm=n}var cm_config_defaults={home_page:"/",max_result:7,t_w:80,t_h:80,summary:0,new_tab_link:false,ct_id:"comments-container",new_cm:" New Comment",interval:3e4,alert:false},_cookie={set:function(e,t,n){var r,i;if(n){r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);i="; expires="+r.toGMTString()}else{i=""}document.cookie=e+"="+t+i+"; path=/"},get:function(e){var t=e+"=",n=document.cookie.split(";"),r;for(var i=0;i<n.length;i++){r=n[i];while(r.charAt(0)==" "){r=r.substring(1,r.length)}if(r.indexOf(t)==0){return r.substring(t.length,r.length)}}return null},del:function(e){this.set(e,"",-1)}},tt_cm=_cookie.get("tt_cm")?_cookie.get("tt_cm"):0,doc_title=document.title;for(var i in cm_config_defaults){cm_config_defaults[i]=typeof cm_config[i]=="undefined"?cm_config_defaults[i]:cm_config[i]}(function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script"),n=cm_config_defaults;t.type="text/javascript";t.id="cm-feed-script";t.src=n.home_page+"/feeds/comments/default?alt=json-in-script&redirect=false&max-results="+n.max_result+"&callback=showRecentComments";e.appendChild(t);setInterval(function(){var t=document.createElement("script");t.type="text/javascript";t.id="cm-feed-script";t.src=n.home_page+"/feeds/comments/default?alt=json-in-script&redirect=false&max-results="+n.max_result+"&callback=showRecentComments";var r=document.getElementById("cm-feed-script");r.parentNode.removeChild(r);e.appendChild(t)},n.interval)})()


}
/*
     FILE ARCHIVED ON 00:05:00 Nov 20, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:52:26 Jul 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 137.958 (3)
  PetaboxLoader3.datanode: 91.828 (5)
  captures_list: 827.581
  exclusion.robots: 0.251
  RedisCDXSource: 669.731
  esindex: 0.014
  PetaboxLoader3.resolve: 109.106 (3)
  CDXLines.iter: 15.125 (3)
  exclusion.robots.policy: 0.235
  load_resource: 94.538
*/
