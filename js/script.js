// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var message='';
var randmessage;
var quotes=[{
quote:'Give me a museum and I will fill it',
source:'Pablo Picasso',
citation:'world Publication',
year:1881
},
{
quote:'I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.',
 source:'Galileo Galilei',
citation:'Famous Star',
year:1564
},
{
quote:'Not everything that can be counted counts, and not everything that counts can be counted.',
source:'Albert Einstein', 
citation:'The Shine',
year:1879
},
{
quote:'Give me chastity and continence, but not yet.',
source:'Saint Augustine',
citation:'Star Publication',
year:1813
},
{
quote:'People demand freedom of speech to make up for the freedom of thought which they avoid.',
source: 'Soren Aabye Kierkegaard',
citation:'Pumi',
year:1813
},
{
quote:'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
source:'Bertrand Russell',
citation:'Delight',
year:1872
},
{
quote:'Glory is fleeting, but obscurity is forever.',
source:' Napoleon Bonaparte',
citation:'Queen',
year:1769
},
{
quote:'Moral indignation is jealousy with a halo.',
source: 'H. G. Wells',
citation:'Lion Publication',
year:1866
}]; 
	 function    printQuote(message){
	document.getElementById('quote-box').innerHTML=message;
	
	 }
	
	 var button=document.getElementById('loadQuote');
	 button.onclick =function (){
	 var i=Math.floor(Math.random()*quotes.length);
	 randmessage=quotes[i];
	 message='<p class="quote">'+randmessage.quote+'</p>'
	 message+='<p class="source">'+randmessage.source+'<span class="citation">'+randmessage.citation+'</span>'+'<span class="year">'+randmessage.year+'</span>'+'</p>';
	 
	  printQuote(message);
	 
	 };
	 document.body.style.height = '500px';
document.body.addEventListener('click', function(e){
    var self = this,
        old_bg = this.style.background;

    setTimeout(function(){
        self.style.background = old_bg;
    }, 1000);
})




  
	 




























