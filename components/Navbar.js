export const items = [
  {
    link: '/create',
    text: 'Create'
  },
  {
    link: '/explore',
    text: 'Explore'
  },
  {
    link: '/about',
    text: 'About'
  }
]

export default function Navbar ({ styles }) {
  return (
    <div id="navbar" style={{
      width: '100%',
      height: '50px',
      backgroundColor: 'black',
      color: 'white',
      padding: '15px',
      boxSizing: 'border-box',
      ...(styles ? styles : {})
    }}>
      <span>StudySpot</span>
      {
        items.map(item => {
          if (item instanceof Function) return item();
          return (
            <a href={item.link} style={{
              marginLeft: '25px',
              margin: '-10px',
              padding: '10px',
              color: '#ddd'
            }}>{item.text}</a>
          );
        })
      }
    </div>
  )
}