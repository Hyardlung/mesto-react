export default function Footer() {
  // function date = new Date();
  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">{`© ${new Date().getFullYear()} Mesto Russia`}</p>
    </footer>
  )
}