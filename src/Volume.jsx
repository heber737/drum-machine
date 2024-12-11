/* eslint-disable react/prop-types */
export default function Volume({ volume, onVolumeChange }) {
  return (
    <div id="volume">
      <input
        id="slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => onVolumeChange(e)}
      />
    </div>
  );
}
