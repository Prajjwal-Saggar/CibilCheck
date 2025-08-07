import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChartLine, FaTimes } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const questions = [
	{
		id: 1,
		question: "What's your credit card utilization ratio?",
		options: ["0-30%", "31-50%", "51-75%", "Above 75%"],
		weights: [100, 70, 40, 10],
	},
	{
		id: 2,
		question: "How many credit accounts do you have?",
		options: ["1-2", "3-5", "6-10", "More than 10"],
		weights: [80, 100, 60, 40],
	},
	{
		id: 3,
		question: "Any missed payments in the last 12 months?",
		options: ["None", "1-2", "3-5", "More than 5"],
		weights: [100, 60, 30, 0],
	},
	{
		id: 4,
		question: "Length of credit history?",
		options: ["<1 year", "1-3 years", "3-5 years", ">5 years"],
		weights: [40, 60, 80, 100],
	},
	{
		id: 5,
		question: "Recent credit inquiries in last 6 months?",
		options: ["None", "1-2", "3-5", ">5"],
		weights: [100, 80, 50, 20],
	},
	{
		id: 6,
		question: "What percentage of your income goes to debt payments?",
		options: ["<20%", "20-30%", "31-40%", ">40%"],
		weights: [100, 75, 50, 25],
	},
	{
		id: 7,
		question: "How many new credit applications in the last year?",
		options: ["None", "1-2", "3-4", "5+"],
		weights: [100, 80, 50, 20],
	},
	{
		id: 8,
		question: "Do you have a mix of credit types (credit cards, loans, etc)?",
		options: ["Yes, diverse mix", "Some variety", "Limited mix", "Single type"],
		weights: [100, 75, 50, 25],
	},
];

const CalComponent = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState({});
	const [showResults, setShowResults] = useState(false);
	const [score, setScore] = useState(null);

	const calculateScore = () => {
		const totalWeight = Object.entries(answers).reduce(
			(acc, [_, value]) => acc + value,
			0
		);
		const finalScore = Math.round((totalWeight / (questions.length * 100)) * 850);
		setScore(finalScore);
		setShowResults(true);
	};

	const getScoreColor = (score) => {
		if (score > 750) return '#22c55e';
		if (score > 650) return '#eab308';
		return '#ef4444';
	};

	const getCreditRating = (score) => {
		if (score >= 750)
			return {
				rating: 'Excellent',
				color: '#22c55e',
				description: 'You have exceptional credit. Keep up the great work!',
			};
		if (score >= 700)
			return {
				rating: 'Very Good',
				color: '#15803d',
				description: 'Your credit score is above average. Minor improvements could help.',
			};
		if (score >= 650)
			return {
				rating: 'Good',
				color: '#eab308',
				description: 'You have a decent credit score. Consider ways to improve it.',
			};
		if (score >= 600)
			return {
				rating: 'Fair',
				color: '#f97316',
				description: 'Your credit needs some work. Focus on payment history and utilization.',
			};
		return {
			rating: 'Poor',
			color: '#ef4444',
			description: 'Your credit needs significant improvement. Consider credit counseling.',
		};
	};

	const ScoreModal = ({ score, onClose }) => {
		const { rating, color, description } = getCreditRating(score);

		return (
			<motion.div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<motion.div
					className="bg-[#032030] p-8 rounded-xl relative max-w-md w-full"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
				>
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-white hover:text-[#006494]"
					>
						<FaTimes size={24} />
					</button>

					<div className="text-center space-y-6">
						<h3 className="text-2xl font-bold text-white">Your CIBIL Score</h3>

						<div className="w-48 h-48 mx-auto">
							<CircularProgressbar
								value={(score / 850) * 100}
								text={`${score}`}
								styles={buildStyles({
									textSize: '16px',
									pathColor: color,
									textColor: 'white',
									trailColor: '#1f2937',
								})}
							/>
						</div>

						<div className="space-y-4">
							<h4 className="text-xl font-semibold" style={{ color }}>
								{rating}
							</h4>
							<p className="text-gray-300">{description}</p>

							<div className="bg-white/10 p-4 rounded-lg">
								<h5 className="text-white font-semibold mb-2">Score Ranges:</h5>
								<div className="space-y-2 text-sm text-white">
									<div className="flex justify-between">
										<span className="text-green-400">750-850</span>
										<span>Excellent</span>
									</div>
									<div className="flex justify-between">
										<span className="text-green-600">700-749</span>
										<span>Very Good</span>
									</div>
									<div className="flex justify-between">
										<span className="text-yellow-400">650-699</span>
										<span>Good</span>
									</div>
									<div className="flex justify-between">
										<span className="text-orange-400">600-649</span>
										<span>Fair</span>
									</div>
									<div className="flex justify-between">
										<span className="text-red-400">300-599</span>
										<span>Poor</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		);
	};

	return (
		<div className="relative">
			<motion.div
				className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<motion.div
					key={currentQuestion}
					initial={{ x: 300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -300, opacity: 0 }}
					className="space-y-6"
				>
					<h3 className="text-white text-xl">
						{questions[currentQuestion].question}
					</h3>
					<div className="grid grid-cols-2 gap-4">
						{questions[currentQuestion].options.map((option, idx) => (
							<motion.button
								key={option}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={() => {
									setAnswers({
										...answers,
										[questions[currentQuestion].id]:
											questions[currentQuestion].weights[idx],
									});
									if (currentQuestion < questions.length - 1) {
										setCurrentQuestion((prev) => prev + 1);
									} else {
										calculateScore();
									}
								}}
								className={`p-4 rounded-lg transition-all ${
									answers[questions[currentQuestion].id] ===
									questions[currentQuestion].weights[idx]
										? 'bg-[#006494] text-white'
										: 'bg-white/20 hover:bg-white/30 text-white'
								}`}
							>
								{option}
							</motion.button>
						))}
					</div>
				</motion.div>
			</motion.div>

			<AnimatePresence>
				{showResults && (
					<AnimatePresence>
						<ScoreModal score={score} onClose={() => setShowResults(false)} />
					</AnimatePresence>
				)}
			</AnimatePresence>
		</div>
	);
};

export default CalComponent;