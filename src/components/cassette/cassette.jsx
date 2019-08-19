/* Library Imports */
import React from "react";

/* Style Imports */
import "../../css/cassette.css";

function Cassette() {
  return (
    <div className="cassette-wrap">
      <span className="screw" />
      <span className="screw" />
      <span className="screw" />
      <span className="screw" />
      <div className="cassette-locker L" />
      <div className="cassette-locker R" />
      <div className="filament-stiffner L" />
      <div className="filament-stiffner R" />
      <div className="filament-process-wrap">
        <span className="square-filament-stiffner L" />
        <span className="square-filament-stiffner R" />
        <span className="circle-filament-stiffner L" />
        <span className="circle-filament-stiffner R" />
        <span className="screw" />
        <div className="filament-reader-area" />
      </div>
      <div className="filaments-container">
        <div className="circular-container L" />
        <div className="circular-container R" />

        <div className="cassette-cover-sticker">
          <h1 className="cassette-name">Song 1</h1>
          <div className="tape-level-wrap">
            <div className="filament L">
              <div className="hub">
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
              </div>
            </div>
            <div className="filament R">
              <div className="hub">
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
                <span className="hub-lock" />
              </div>
            </div>
          </div>
        </div>

        <div className="filament-thin-wrap" />
      </div>
    </div>
  );
}

export default Cassette;
