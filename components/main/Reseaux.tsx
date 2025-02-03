import Link from 'next/link'
import React from 'react'

const Reseaux = () => {
  return (
    <>
        {/* Réseau Sociaux */}
        <div className="bg-Es_primary w-10 rounded-l-2xl p-6 flex flex-col items-center justify-around absolute right-0 top-65">
          <div className='my-2'>
            <Link href="https://facebook.com"  className='cursor-pointer' legacyBehavior >
              <a target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                  <path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                </svg>
              </a>
            </Link>
          </div>
          <div className='my-2'>
              <Link href="https://facebook.com" className='my-4' legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a.961.961 0 0 0-.372.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.448 9.448 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.497.497 0 0 0-.176-.041a.482.482 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.43 1.43 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6.025 6.025 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.297 6.297 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>
                </a>
              </Link>
          </div>
          <div className='my-2'>
              <Link href="https://twitter.com" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="white" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
                </a>
              </Link>
          </div>
          <div className='my-2'>
              <Link href="https://linkedin.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
              </a>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Reseaux
