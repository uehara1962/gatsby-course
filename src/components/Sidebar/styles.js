import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")` 
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`
