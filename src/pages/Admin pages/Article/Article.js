import {
    Avatar,
    Box,
    Card,
    Icon,
    IconButton,
    MenuItem,
    Select,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    useTheme,
  } from '@mui/material';
  import Button from '@mui/material/Button';
  import { Paragraph } from '../../../Components/Typography';

// import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
  const CardHeader = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
  }));
  
  const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
  }));
  
  const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
      width: 50,
      height: 15,
      borderRadius: 500,
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': { borderBottom: 'none' },
    '& td:first-of-type': { paddingLeft: '16px !important' },
  }));
  
  const Small = styled('small')(({ bgcolor }) => ({
    width: 50,
    height: 15,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  }));
  
  const ArticleTable = () => {
    // const { palette } = useTheme();
    const bgError ="#FF3D57";
    const bgPrimary = '#1976d2';
    const bgSecondary = '#FFAF38';
  
    return (
      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
        <CardHeader>
          <Title>Articles</Title>
          <div>
        <Link  to="add"   style={{textDecoration:'none',width:'100%',marginBottom:"1vmax",}}>
          <Button color="success" variant="contained" sx={{ px: 3, py: 0.5 }}>Add</Button>
        </Link>
        </div>
        </CardHeader>
  
        <Box overflow="auto">
          <ProductTable>
            <TableHead>
              <TableRow>
                <TableCell sx={{ px: 3 }} colSpan={4}>
                  Name
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  Tags
                </TableCell>
                {/* <TableCell sx={{ px: 0 }} colSpan={2}>
                Status
                </TableCell> */}
                <TableCell sx={{ px: 0 }} colSpan={1}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {productList.map((product, index) => (
                <TableRow key={index} hover>
                  <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Box display="flex" alignItems="center">
                      <p>{index+1}.</p>
                      <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                    </Box>
                  </TableCell>
  
                  <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    {product.price > 999 ? (product.price / 1000).toFixed(1) + '' : product.price}
                  </TableCell>
  
                  {/* <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                    {product.available ? (
                      product.available < 20 ? (
                        <Small bgcolor={bgSecondary}>{product.available} available</Small>
                      ) : (
                        <Small bgcolor={bgPrimary}>in stock</Small>
                      )
                    ) : (
                      <Small bgcolor={bgError}>out of stock</Small>
                    )}
                  </TableCell> */}
  
                  <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ProductTable>
        </Box>
      </Card>
    );
  };
  
  const productList = [
    {
      
      name: 'Sports',
      price: 100,
      available: 15,
    },
    {
      
      name: 'Politics',
      price: 1500,
      available: 30,
    },
    {
      
      name: 'Buisness',
      price: 1900,
      available: 35,
    },
    {
      
      name: 'Indian',
      price: 100,
      available: 0,
    },
    {
      
      name: 'Movies',
      price: 1190,
      available: 5,
    },
  ];
  
  export default ArticleTable;
  