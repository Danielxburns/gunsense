import { useState } from 'react';

import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';

export function HelpButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  return (
    <>
      <Button
        sx={{ mt: 3, mb: 2, mx: 2, maxWidth: 100 }}
        type="button"
        onClick={handleClick}
      >
        Need help?
      </Button>
      <Popper
        id={'help'}
        sx={{ width: '75%' }}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
      >
        <Box
          sx={{
            border: 1,
            borderRadius: 2,
            m: 2,
            p: 4,
            bgcolor: 'background.paper',
            color: 'black',
          }}
        >
          <div>
            Key components that someone should consider including in an email to
            their representative:
            <ol>
              <li>
                Introduction: Begin by introducing yourself and your purpose for
                writing the email.
              </li>
              <li>
                Statement of the issue: Clearly state the issue you are writing
                about, such as gun violence or gun control legislation.
              </li>
              <li>
                Personal connection: Explain why the issue is important to you,
                and how it has impacted your life or the lives of people you
                know.
              </li>
              <li>
                Evidence or supporting information: Provide evidence or
                supporting information that supports your position, such as
                statistics or research on the impact of gun violence or the
                effectiveness of certain gun control measures.
              </li>
              <li>
                Request for action: Clearly state what action you would like the
                representative to take, such as supporting specific gun control
                measures or opposing others.
              </li>
              <li>
                Call to action: End the email by urging the representative to
                take action on the issue, and expressing your willingness to
                work with them to find a solution.
              </li>
              <li>
                Contact information: Provide your contact information, including
                your name, address, and phone number, so that the representative
                can follow up with you if needed.
              </li>
            </ol>{' '}
            Aim to be clear, concise, and respectful, while providing the
            representative with the information they need to understand the
            issue and take action.
          </div>
        </Box>
      </Popper>
    </>
  );
}
