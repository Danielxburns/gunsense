import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Actions() {
  return (
    <Box sx={{ border: 1, borderRadius: 2, p: 4, bgcolor: 'background.paper' }}>
      <Typography>
        Actions that can be taken to address gun violence in America:
      </Typography>
      <ol>
        <li>
          Strengthening background checks: Background checks could be
          strengthened to prevent individuals with a history of violence or
          mental illness from obtaining firearms.
        </li>
        <li>
          Reducing access to firearms: Access to firearms could be reduced
          through measures such as limiting the sale of certain types of
          firearms or regulating the sale of ammunition.
        </li>
        <li>
          Investing in violence prevention programs: Investing in violence
          prevention programs, such as community-based programs that address the
          root causes of violence, could help to reduce the incidence of gun
          violence.
        </li>
        <li>
          Encouraging responsible gun ownership: Encouraging responsible gun
          ownership, such as safe storage of firearms, could help to reduce
          accidental shootings and thefts.
        </li>
        <li>
          Enhancing mental health services: Enhancing access to mental health
          services could help to identify and treat individuals at risk of
          committing acts of violence.
        </li>
        <li>
          Improving law enforcement strategies: Law enforcement strategies could
          be improved to reduce the availability of illegal firearms and to
          prevent gun violence.
        </li>
        <li>
          Addressing the underlying causes of violence: Addressing the
          underlying causes of violence, such as poverty, lack of access to
          education, and social isolation, could help to reduce the incidence of
          gun violence.
        </li>
      </ol>
      <Typography>
        Actions that citizens can take to affect legislation in their
        communities:
      </Typography>
      <ol>
        <li>
          Contacting their elected officials: Citizens can write letters, make
          phone calls, or send emails to their elected officials to express
          their opinions on legislation.
        </li>
        <li>
          Joining or starting a grassroots campaign: Citizens can get involved
          with a grassroots campaign to raise awareness about an issue and build
          support for legislative change.
        </li>
        <li>
          Attending town hall meetings and public hearings: Citizens can attend
          town hall meetings and public hearings to share their thoughts on
          proposed legislation.
        </li>
        <li>
          Signing petitions: Citizens can sign petitions to demonstrate support
          for or opposition to legislation.
        </li>
        <li>
          Voting: Citizens can vote in elections for candidates who support
          their positions on important issues.
        </li>
      </ol>
    </Box>
  );
}
