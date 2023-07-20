var blockquote = document.querySelector('blockquote')
var button = document.querySelector('button')
var quotes = [
`Unless someone like you cares a whole awful lot, nothing is going to get better. It'll not!`,
`I didn't know that it was our last time together...`,
`If you are so good at something never do it for free!`,
`"Anyone can cook".  Not everyone can become a great artist, but a great artist can come from anywhere!`,
`The human brain is a wonderful thing. it starts working the moment you are born, and never stops until you stands up to speak in public!`,
`The ultimate perfection is to be a good person!`,
`Out of difficulties grow miracles!`,
`Launch and learn. Everything is progress`,
`When I let of be what I am, I become what I could be`,
`Don't be sad because it's over, be happy because it happened!`,
`If you only do what you know, you will never be more than you are now!`,
`You will have the misfortune of fools if you want to show society more than nature has provided you!`,
`it's not over until I win!`,
`To live is to suffer, to survive is to find meaning in suffering!`,
`For everything in life, be the best!`,
`Do not run after love. Do not run behind fame. Do not run after money. Run behind the best version of you and these things will run after you!`,
`Face and look for sobs for all the problems that appear in your face, because only so you will create the habit and feel safe to deal with anything with tranquility!`,
`Study little, study every day, study always doing!`,
`There are ways that for man looks good, but in the end it takes death!`,
`If you can write your problem clearly on a paper then it will be automatically settled half!`,
`Do not order an opportunity, deserve an opportunity!`,
`Get good, to the point that someone ignorant is impossible!`,
`There is no noble in being superior to his fellow man, the real nobility is to be superior to his old self!`,
`Ask for help does not mean giving up, is to refuse to give up!`,
`What a disgrace is for the aging man without ever seeing the beauty and strength that his body is able to achieve!`,
`Obsection surpasses talent!`,
`Begin by why!`,
`If you do what your intuition sends and use common sense, leaving aside vanity, you have all the possibilities of achieving your goal!`,
`Avoid people who do not want to learn new things!`,
`It's no use worrying about things you do not control!`,
`Attitudes change feelings, so think well in a situation where you think about being evil!`,
`The best part in living is to be able to help someone with your existence, including yourself!`,
`Family is the one who supports you in difficult moments, your blood to mosquito has!`,
`If the world used someone to hurt you, life will bring someone to heal you!`,
`There is no right person, there are those who want to do it right!`,
`Be so good to the point of making everything seem easy!`,
`Everyone dies, but not everyone lives!`,
`The essential is invisible to the eyes.`,
`We run the risk of crying a little when it was captivated!`,
`You become eternally responsible for what you are captive!`,
`It is much more difficult to judge yourself to judge others. If you can judge you well, here is a true wise!`,
`You need to demand from each one that each can give!`,
`Authority rests on reason!`,
`When we always walk forward, you can not even go far!`,
`It's not what we left behind that destroys me, that's what we could have built if we stayed!`,
`Busy mind does not miss anyone!`,
`Confused people lose incredible people!`,
`A lot of truth is dictated in a joke!`,
`I like the impossible, because there the competition is smaller!`,
`Good, Better, Best. Never let it rest, until your good is better, and your better is best!`,
`A good idea is born from dozens of bad ideas!`,
`You can face a mistake as a bullshit to be forgotten, or as a result that points to a new direction!`,
`A wise never says everything you think, but you always think everything says!`,
`Be all you need!`,
`Be so good, to the point of doing everything in life seem easy!`,
`Sometimes you win, others you learn!`,
`You deserve someone to talk about you for everyone as if you had discovered the galaxy!`,
`The process is slow, but giving up will not accelerate!`,
`The way to success is lonely!`,
`Praise in public and correct in particular. A Sabio orientes without offending, and teaches without humiliating!`,
`There is a difference between motivation and discipline!`,
`Apoiar o crescimento do outro nunca irá impedir o seu!`,
`Be with someone who makes you happy!`,
`No one cares about your failure as much as you!`,
`Not one step bigger than the leg, do what it has to be done now, and without procrastination!`,
`Molming is the best way to learn!`,
`The sword is not heavy, you're weak!`,
`Without practice theory is lost!`,
`Do not want to be better than anyone, want to utrapasar your limits and overcome yourself!`,
`I prefer those who criticize me, because they correct me, to those who praise me, because they corrupt me!`,
`You are not ugly, you only have reduced graphics for better performance!`,
`If you will not say anything useful, do not bother silence!`,
`Apologizing does not mean that you are right or wrong, it means that you value your relationship more than your ego!`,
`Just know, when you really want success, you will never give up on this, no matter how bad the situation is!`,
`Good things come for those who expect, bigger things come to those who get up and do anything for that to happen!`,
`I do not regret the things I did, I'm sorry the things I did not do when I had the chance!`,
`Attention is given as received!`,
`Se ninguém é bom o suficiente pra vc, seja essa pessoa`,
`Your limit? Who said what your limit is? Instead of thinking about a lot of bullshit ... because you do not use your strength to move on!`,
`Challenges are what makes life interesting and overcoming them is what makes life meaningful!`,
`To succeed, your successful desire should be greater than your fear of failure!`,
`Important people come and go from our life, and that's okay! No one is too busy to answer you, you who are not a priority!`,
`It's better to have a friend who calls you gay, than a gay calling friend!`,
`In doubt, tell the truth!`,
`You will never be able to please everyone!`,
`People will always put their own interests above their own!`,
`The motivation makes you start and discipline make you continue!`,
`Go where you are celebrated, not tolerated, if they can not see the real value of you, it's time for a new start!`,
`The best revenge is massive success!`,
`The only way to do a great job is to love what you do, if you have not yet found, keep looking, don't settle!`,
`Do not worry about failures, worry about the chances you lose when you do not even try!`,
`For every challenge found there is growth opportunity!`,
`Build your own dreams, or another person will hire you to build theirs!`,
`Just remember that there is someone out there that is more than happy with less than you have!`,
`The biggest failure you can have in life is committing the mistake of never trying anything!`,
`Not everyone intends to be in their future. Some people are passing to teach you lessons in life!`,
`Do not cry for the past, it is gone. Do not stress about the future, he did not arrive. Live in the present and make it beautiful!`,
`Life always offers a second chance. It's called tomorrow!`,
`My life is perfect, even when it is not!`,
`Focus on what matters and release what you do not!`,
`It hurts to love someone and not being loved in return!`,
`But what is more painful than to love someone and never find the courage to let this person know how you feel!`,
`Value every moment you have, and value more because you shared with someone special, and remember that time does not wait for anyone!`,
`Yesterday is history, tomorrow is a mystery, today is a gift, that is why it is called Present!`,
`Never allow someone to be your priority while you are just an option!`,
`More people would learn from their mistakes if they were not so busy denying them!`,
`If someone wants to be part of your life, they will make an effort to be in it. Do not worry by reserving a space in your heart for someone who does not strive to stay!`,
`Being happy does not mean that everything is perfect, it means that you have decided to look beyond imperfections!`,
`Although no one can go back and make a new beginning, anyone can start from now on and make a new end!`,
`When the past calls, let him go to voicemail, believe me, there's nothing new to say!`,
`Even though everything goes wrong, you can still start from scratch!`,
`When you eat demonstrate satisfaction, honor the one who died to make it stronger!`,
`If you know yourself, you know the whole universe and the gods. If what you are looking for, do not find first within you, you will not find anywhere!`,
`Even a thousand lines algorithm began to be written with the first command!`,
`Say what you want to express, express what you mean!`,
`Motto autem diem: ACTA NON VERBA!`,
`Choose a cause to fight and it will be your motivation daily!`,
`You can not blame yourself forever, if it suits you once and over!`,
`I'm going to: care for you, understand you, make you fell appreciated!`,
`I'm very lucky to have someone who makes you say bye to be something so difficult!`,
`I wanted there to be a way to know that we are in the good and old days before they are your past!`,
`The joy of knowing that you exist, makes me strong to endure the sadness of your absence. I love you!`,
`I do not accept to put the guilt in signs, I assume full responsibility for my behavior of shit, thank you!`
]
var numberQuote = randomNumber()

button.addEventListener('click', init)

init()

function init() {	
	showQuote()
	randomColor()
}

function showQuote() {
	var newNumberQuote = randomNumber()
	while (newNumberQuote == numberQuote) {
		newNumberQuote = randomNumber()
		console.log(newNumberQuote);
		console.log(numberQuote);
	}
	numberQuote = newNumberQuote
	blockquote.innerHTML =`${quotes[numberQuote]}`
}

function randomNumber(min = 0, max = quotes.length) {
  return Math.floor(Math.random() * max) + min;
}

function randomColor() {
	const red = randomNumber(50,200)
	const green = randomNumber(50,200)
	const blue = randomNumber(50,200)
	const color = `rgb(${red}, ${green}, ${blue})`
	const letter = `rgb(${255-red}, ${255-green}, ${255-blue})`
	document.body.style.setProperty('--color', color);
	document.body.style.setProperty('--letter', letter);
}