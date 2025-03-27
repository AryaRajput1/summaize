export const PLANS = [
  {
    price_id: "price_1R6U8jRon1tcUFNVQkHkhNM7",
    title: "Basic",
    description: "Perfect for occasional use",
    price: "9",
    benefits: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email Support",
    ],
    limit: 5,
    recommended: false,
    link: 'https://buy.stripe.com/test_00gaGh9c1fkk9xe8ww'
  },
  {
    price_id: "price_1R6UA0Ron1tcUFNVlYkr3DEB",
    title: "Pro",
    description: "For professionals and teams",
    price: "19",
    benefits: [
      "Unlimited summaries per month",
      "Priority processing speed",
      "24/7 priority Support",
      "Markdown Export",
    ],
    limit: 1,
    recommended: true,
    link: 'https://buy.stripe.com/test_00g6q1cod8VWgZGdQR'
  },
];



export const DEMO_SUMMARY = `# Arya Rajput: Frontend Developer 🚀

One highly skilled frontend developer with a passion for building scalable and maintainable applications.

• 💼  Experienced in building robust and engaging applications.

# Document Details
• 📄 Type: Resume/CV
• 🎯 For: Potential Employers

# Key Highlights
• 🏆  Award-winning projects delivered successfully at Infosys.
• 💻 Expertise in React, Vue, Next.js, and other cutting-edge technologies.
• 🧑‍💻  Proficient in building highly scalable and maintainable cross-platform applications.

# Why It Matters
• 🌟  Arya's skills and experience make her a valuable asset to any team seeking a talented and highly-motivated frontend developer. Her strong problem-solving abilities, coupled with her impressive portfolio of projects, demonstrate her capability to deliver high-quality work consistently.  She is a proven asset to any development team.

# Main Points
• 💡  Exceptional skills in React, Vue, and other front-end frameworks.
• 💪  Proven ability to deliver complex projects on time and within budget.
• 📈  Consistent record of exceeding expectations and achieving outstanding results.

# Pro Tips
• 💯  Review Arya's impressive portfolio of projects on GitHub and LeetCode.
• 🤝 Reach out to connect on LinkedIn to learn more about her work and experience.
• 👍 Consider Arya for your next frontend development project; you won't regret it.

# Key Terms to Know
• ⚛️ React: A JavaScript library for building user interfaces.
• 💻 Next.js: A React framework for building web applications.


# Bottom Line
• ✨ Arya Rajput is a top-tier frontend developer with a proven track record of success and a bright future ahead.
`


export const MOTION_CONSTANTS = {
  contianerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  itemVariants: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 50,
        duration: 0.8
      }
    }
  },
  buttonVariants: {
    scale: 1.1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 300,
      duration: 0.8
    }
  }
}