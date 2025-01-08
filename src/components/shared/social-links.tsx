import { Instagram, Linkedin, Twitter } from '../ui/icons'

export default function SocialLinks(): React.JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <a href="https://x.com" target="_blank">
        <Twitter className="size-[20px]" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <Instagram className="size-[20px]" />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <Linkedin className="size-[20px]" />
      </a>
    </div>
  )
}
