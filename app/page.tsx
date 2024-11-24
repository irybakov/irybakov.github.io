import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Software Engineer and Distributed Systems enthusiast and advocate, driven by a relentless commitment to 
        building systems that are scalable, reliable, and elegantly designed to address complex real-world challenges.`}
      </p>
      <p className="mb-4">
        {` My Engineering Philosophy:
        At the heart of my work is a passion for collaboration and innovation. I am committed to fostering strong relationships with stakeholders, aligning technical implementations with strategic goals, and facilitating open discussions that drive clarity and collective success. My engineering philosophy is anchored in:
        `}          
      </p>
      <p className="mb-4"> 
          {`Reliability and Scalability: Prioritizing designs that grow with the needs of the system and ensuring high availability, even during peak usage.`}
      </p>
      <p className="mb-4">
          {`Continuous Improvement: Leveraging DORA metrics and data-driven insights to refine processes, reduce deployment lead times, and improve overall system efficiency.`}
      </p>
      <p className="mb-4">
	        {`Knowledge Sharing: Actively contributing to the growth of engineering teams through mentorship, regular learning sessions, and open exchange of ideas`}
      </p>
      <p className="mb-4">
        {`For me, software engineering isn’t just about writing code; it’s about creating intelligent, adaptable systems that make a lasting impact. My journey is fueled by curiosity, a love for learning, and the drive to turn technical complexity into elegant solutions that resonate with users and businesses alike.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
