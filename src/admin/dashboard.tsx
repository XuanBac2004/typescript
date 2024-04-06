import { product } from '../interfaces/product'
import { NavLink } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Table } from 'flowbite-react'
type Props = {
  products: product[]
  onDel: (id: string | undefined) => void
}

const Dashboard = ({ products, onDel }: Props) => {
  return (
    <div className='overflow-x-auto'>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>title</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>description</Table.HeadCell>
          <Table.HeadCell>image</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Button outline gradientDuoTone='tealToLime'>
            <NavLink to='/admin/add'>add</NavLink>
          </Button>
        </Table.Head>
        {products.map((pro) => (
          <Table.Body className='divide-y' key={pro.id}>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {pro.title}
              </Table.Cell>
              <Table.Cell>{pro.price}</Table.Cell>
              <Table.Cell>{pro.description}</Table.Cell>
              <Table.Cell>
                <img src={pro.images} width={200} alt={pro.title} />
              </Table.Cell>
              <Table.Cell>
                <Button outline gradientDuoTone='redToYellow'>
                  <NavLink
                    to={`/admin/edit/${pro.id}`}
                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                  >
                    edit
                  </NavLink>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button outline gradientDuoTone='redToYellow'>
                  <button
                    onClick={() => {
                      onDel(String(pro.id))
                    }}
                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                  >
                    delete
                  </button>
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default Dashboard
