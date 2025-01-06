// Array of available Dicebear avatar styles
const styles = ['adventurer', 'bottts', 'identicon', 'micah', 'thumbs', 'Big Ears', 'Big Eyes', 'Big Smile'];

const generateAvatar = async () => {
  try {
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomSeed = Math.random().toString(36).substring(2, 10);
    const avatarUrl = `https://api.dicebear.com/9.x/${randomStyle}/svg?seed=${randomSeed}`;

    
    const response = await fetch(avatarUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch the avatar');
    }

    
    const avatarBlob = await response.blob();

    const avatarImages = URL.createObjectURL(avatarBlob);
    const avatarElement = document.getElementById('avatar');
    avatarElement.src = avatarImages;

} catch (error) {
    console.error('Error generating avatar:', error);
  }
};

document.getElementById('change-avatar').addEventListener('click', generateAvatar);

window.addEventListener('load', generateAvatar);