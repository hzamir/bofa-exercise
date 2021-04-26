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

// todo I noticed some box shadows put these in at some point

// Styled component named StyledButton
export const PrimaryButton = styled.button`
   font-size: 14px;
   color:            ${({disabled})=>disabled? primary.fgDisabled:primary.fg};
   background-color: ${({disabled})=>disabled? primary.bgDisabled:primary.bg};

  // TODO: There is a box shadow, but it could take a VERY long time to get it right, but put in something
  //box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  
  // TODO this should read !disabled, but for some reason this only works with !!disabled
  ${({disabled}) => !!disabled} {
  ${({disabled}) => !!disabled} {
     &:hover {
       background-color: ${primary.bgHover};
     }
   }
  
  // intentionally putting in obvious focus for debugging, come back and fix to look like spec
  &:focus {
    outline-width: 1px;
    outline-style: dotted;
    outline-color: black;
    outline-offset: 3px;
  }

    [data-icon] {
      float: right;
      padding-left: 10px;
      &:before { content: attr(data-icon); }
    } 
    
}

`;

export const SecondaryButton = styled(PrimaryButton)`
     color:            ${({disabled})=>disabled? secondary.fgDisabled: secondary.fg};
     background-color: ${({disabled})=>disabled? secondary.bgDisabled:secondary.bg};
    border: 2px solid black;

    // TODO this should read !disabled, but for some reason this only works with !!disabled
    ${({disabled}) => !!disabled} {
      &:hover {
        background-color: ${secondary.bgHover};
        color: ${secondary.fgHover}
      }
    }
    
  //TODO put in a different focus look for secondary buttons (but question the design choice)

`;
