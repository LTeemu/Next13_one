import { VscGithub } from 'react-icons/vsc'

export default function Footer() {
  return (
		<footer className="flex items-center justify-center py-3">
			<a href="https://github.com/lteemu" target="_blank" aria-label="Github" rel="noreferrer" className="mr-2 hover:opacity-80">
				<VscGithub style={{ fontSize: '1.4rem' }} />
			</a>
			TL <span className="ml-1"> &copy; {new Date().getFullYear()}</span>
		</footer>
	)
}