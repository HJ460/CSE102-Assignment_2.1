import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Hello! My name is Heejoo Chae.</h1>
      <p>My hobby is playing badminton.</p>
      <p>I have a dog whose name is Mango, and her breed is labrador retriever.</p>
      <p>Because of my friends enlisted to serve their mandatory military service, I can't play badminton these days.</p>
      <p>So when I have free time, I go for a walk with my dog.</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}