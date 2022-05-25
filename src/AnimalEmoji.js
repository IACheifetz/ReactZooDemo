export default function Animal({ animal }) {
  return <div className="animal">
    {animal === 'fox' && '🦊'}
    {animal === 'rat' && '🐀'}
    {animal === 'orangutan' && '🦧'}
    {animal === 'raccoon' && '🦝'}
  </div>;
}