import styled from 'styled-components';

// these colors would preferably come from larger theme,
// at least I broke them out here to move them when justified

// all colors that could practically be measured with an eyedropper were.
// not really possible with text due to aliasing
// and not attempted with blacks, since while I could measure not-quite black, they were not visually distinguishable

const primary = {
    fg:         '#fff',    // not able to measure the actual font color used
    fgDisabled: '#ccc',    // invented value, change to taste
    bg:         '#5597FA', // measured value
    bgDisabled: '#abc3e8', // extrapolated a disabled color that still suggests it is in primary color scheme
    bgHover:    '#2F72D7'  // measured value
};

const secondary = {
    fg:         '#000',    // not able to measure the actual font color used
    fgDisabled: '#ccc',    // invented value, change to taste
    bg:         '#F2F2F2', // measured value
    bgDisabled: '#E8E8E8', // measured value
    bgHover:    '#4D4D4D', // measured value
    fgHover:    '#fff'
};


// Styled component named StyledButton
export const PrimaryButton = styled.button`
   font-size: 14px;
   color:            ${({disabled})=>disabled? primary.fgDisabled:primary.fg};
   background-color: ${({disabled})=>disabled? primary.bgDisabled:primary.bg};
   border: 1px solid black;

  // TODO this should read !disabled, but for some reason this only works with !!disabled
  ${({disabled}) => !!disabled} {
     &:hover {
       background-color: ${primary.bgHover};
     }
   }
 }

`;

export const SecondaryButton = styled(PrimaryButton)`
     color:            ${({disabled})=>disabled? secondary.fgDisabled: secondary.fg};
     background-color: ${({disabled})=>disabled? secondary.bgDisabled:secondary.bg};

    // TODO this should read !disabled, but for some reason this only works with !!disabled
    ${({disabled}) => !!disabled} {
      &:hover {
        background-color: ${secondary.bgHover};
        color: ${secondary.fgHover}
      }
    }
 `;
