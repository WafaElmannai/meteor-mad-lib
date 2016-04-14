import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './madlib.html';

Template.madlib.onRendered(function() {

});

Template.madlib.events({
	'submit ': function(event, template) {
		event.preventDefault();
		console.log('Hello world!');

	}
});

Template.madlib.events({
	'submit .form01': function(event) {
		event.preventDefault();
		const target =event.target;
		const Exclamation=target.Exclamation.value;
		const Adverb=target.Adverb.value;
		const Noun=target.Noun.value;
		const Verb=target.Verb.value;

		const madlib01=`${Exclamation}!you say, as you ${Adverb} jump onto your ${Noun} and ${Verb} into the sunset`;
		$("#head01").hide();
		$("#head01").text(madlib01).fadeIn("slow").css("color","#4422DD");


	}
});