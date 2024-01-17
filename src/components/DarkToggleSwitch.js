/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ToggleSwitchStyle = styled.label`
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
`;

const ToggleSwitchText = styled.span`
  margin: 0 0.75em;
`;

const ThemeFill = styled.span`
  background-color: var(--bg);
  display: block;
  mix-blend-mode: difference;
  position: fixed;
  inset: 0;
  height: 100%;
  transform: translateX(-100%);
  transition: transform var(--transDur) ease-in-out;
`;

const ThemeIcon = styled.span`
  display: block;
  top: 0.75em;
  left: 0.75em;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
`;

const ThemeIconPart = styled.span`
  border-radius: 50%;
  box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  transition: box-shadow var(--transDur) ease-in-out,
    opacity var(--transDur) ease-in-out,
    transform var(--transDur) ease-in-out;
  transform: scale(0.5);

  &:nth-of-type(2) {
    background-color: hsl(0, 0%, 100%);
    border-radius: 0.05em;
    box-shadow: none;
    top: 50%;
    left: calc(50% - 0.05em);
    transform: rotate(0deg) translateY(0.5em);
    transform-origin: 50% 0;
    width: 0.1em;
    height: 0.2em;
  }

  &:nth-of-type(3) {
    transform: rotate(45deg) translateY(0.5em);
  }

  &:nth-of-type(4) {
    transform: rotate(90deg) translateY(0.5em);
  }

  &:nth-of-type(5) {
    transform: rotate(135deg) translateY(0.5em);
  }

  &:nth-of-type(6) {
    transform: rotate(180deg) translateY(0.5em);
  }

  &:nth-of-type(7) {
    transform: rotate(225deg) translateY(0.5em);
  }

  &:nth-of-type(8) {
    transform: rotate(270deg) translateY(0.5em);
  }

  &:nth-of-type(9) {
    transform: rotate(315deg) translateY(0.5em);
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + ${ThemeFill} {
    transform: translateX(0);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(1) {
    box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;
    transform: scale(1);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart} ~ ${ThemeIconPart} {
    opacity: 0;
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(2) {
    transform: rotate(45deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(3) {
    transform: rotate(90deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(4) {
    transform: rotate(135deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(5) {
    transform: rotate(180deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(6) {
    transform: rotate(225deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(7) {
    transform: rotate(270deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(8) {
    transform: rotate(315deg) translateY(0.8em);
  }

  &:checked + ${ThemeIcon} ${ThemeIconPart}:nth-child(9) {
    transform: rotate(360deg) translateY(0.8em);
  }
`;

const ToggleSwitch = () => {
  return (
    <ToggleSwitchStyle htmlFor="theme">
      <ToggleSwitchText>Light</ToggleSwitchText>
      <span>
        <ToggleInput id="theme" type="checkbox" role="switch" name="theme" value="dark" />
        <ThemeFill className="theme__fill"></ThemeFill>
        <ThemeIcon className="theme__icon">
          {[...Array(9)].map((_, index) => (
            <ThemeIconPart key={index} className="theme__icon-part"></ThemeIconPart>
          ))}
        </ThemeIcon>
      </span>
      <ToggleSwitchText>Dark</ToggleSwitchText>
    </ToggleSwitchStyle>
  );
};

export default ToggleSwitch;
