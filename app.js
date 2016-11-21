$(document).ready(function()
{
	$('form').submit(function(event)
	{
		processText($('textarea').val());
		event.preventDefault();
	})
})
function processText(text)
{
	var sentences = text.split('.');
	var total = 0;
	for(var i = 0; i < sentences.length ; i++)
	{
		total += sentences[i].length;
	}
	$('.js-sentence').text(total / sentences.length);
	var words = text.split(' ');
	var uniqueWords = {};
	total = 0;
	for(var i = 0; i < words.length ; i++)
	{
		total += words[i].length;
		uniqueWords[words[i]] = 1;
	}
	$('.js-word-length').text(total / words.length);
	$('.js-word-count').text(words.length);
	$('.js-unique').text(Object.keys(uniqueWords).length);
	$('dl').removeClass('hidden');
}