export default function Hero ({ styles, children }) {
  return (
    <div id="hero" style={{
      height: 'calc(100vh - 50px)',
      width: '100%',
      backgroundColor: (styles && styles.backgroundColor) ? styles.backgroundColor : 'white',
      color: 'white',
      padding: '15px',
      boxSizing: 'border-box',
      ...(styles ? styles : {})
    }}>
      {children}
    </div>
  )
}