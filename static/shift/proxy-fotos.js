
doFilter = function (that)  { 

 var title = $(that).find('title').text();
 var image = $(that).find('img').attr('src');

 var link = $(that).find('subtitle').text();
 $('#temp').html(link);
 var sub = $('#temp').text();

 var link = $(that).find('description').text();
 $('#temp').html(link);
 var text = $('#temp').text();

 var src = image;

 return {'title':title, 'subtitle': sub, 'body': text, 'src':src};
} 
