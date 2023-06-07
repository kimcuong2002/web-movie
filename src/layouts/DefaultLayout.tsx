import motchill from '../assets/images/motchill.png';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { navBarItems } from '../utils/NavbarItems';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

type IDefaultLayoutProps = {
  children: ReactElement;
};
const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <center>
      <Grid container>
        <Grid item xs={12}>
          <div className="bg-[#333333] pt-[20px]">
            <div className="flex justify-between w-[60%] mb-[20px] items-center ">
              <img src={motchill} alt="" className="w-[20%]" />
              <TextField
                label={'Search'}
                id="margin-none"
                size="small"
                sx={{
                  background: 'white',
                }}
              />
              <div className="flex gap-[10px]">
                <Button
                  variant="outlined"
                  startIcon={<LoginIcon />}
                  size="small"
                >
                  Login
                </Button>
                <Button variant="outlined" startIcon={<HowToRegIcon />}>
                  Register
                </Button>
                <Button variant="outlined" startIcon={<BookmarkIcon />}>
                  BookMask
                </Button>
              </div>
            </div>
            <div className="w-[100%] bg-[#2d2d2d]">
              <Box className="pb-[20px] w-[60%] flex justify-between pt-[20px]">
                {navBarItems.map((item, i) => (
                  <Link to={`/${item.link}`}>
                    <Button
                      key={i}
                      sx={{ fontSize: '17px', fontWeight: 'bold' }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <center>
            <Box className="w-full  bg-[#333333]">
              <Box className="w-[60%] py-[20px]">
                <Grid container>
                  <Grid xs={8}>
                    <Typography align="justify" className="text-gray-300">
                      Xem phim online miễn phí chất lượng cao với phụ đề tiếng
                      việt - thuyết minh - lồng tiếng. Mọt phim có nhiều thể
                      loại phim phong phú, đặc sắc, nhiều bộ phim hay nhất - mới
                      nhất.
                    </Typography>
                    <Typography align="justify" className="text-gray-300">
                      Website motphim.net với giao diện trực quan, thuận tiện,
                      tốc độ tải nhanh, thường xuyên cập nhật các bộ phim mới
                      hứa hẹn sẽ đem lại những trải nghiệm tốt cho người dùng.
                    </Typography>
                  </Grid>
                  <Grid xs={3}>
                    <center>
                      <Table>
                        <TableHead className="flex">
                          <TableRow>
                            <TableCell>Regulations</TableCell>
                            <TableCell>About</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>FaceBook</TableCell>
                            <TableCell>FaceBook</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </center>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </center>
        </Grid>
      </Grid>
    </center>
  );
};

export default DefaultLayout;
