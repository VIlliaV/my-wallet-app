const BackgroundDexola = () => {
  return (
    <figure style={{ boxSizing: 'border-box', margin: '-10px 0px', padding: '0', zIndex: '-10' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
        poster="https://dexola.com/wp-content/uploads/2023/04/Dexola_BG_1-1.png"
      >
        <source
          src="https://dexola.com/wp-content/uploads/2023/04/26e9-48a0-96cb-0d05f28a3009_compressed.mp4"
          type="video/mp4"
        />
      </video>
      <figcaption>dexola backround</figcaption>
    </figure>
  );
};

export default BackgroundDexola;
