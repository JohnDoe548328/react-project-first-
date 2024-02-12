import { React, useMemo, useState, useEffect } from 'react'
import { Button, Dialog, Input } from 'components/ui'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { DataTable } from 'components/shared'
import { Link } from 'react-router-dom'

/** Example purpose only */
const SingleMenuView = () => {

    const columns = useMemo(
        () => [
            {
                Header: 'Form name',
                accessor: 'name',
                sortable: true,
            },
            {
                Header: 'Form type',
                accessor: 'category',
                sortable: true,
            },
            {
                Header: 'Performance',
                accessor: 'stock',
                sortable: true,
            },
            {
                Header: 'Action',
                accessor: 'Action',
                sortable: true,
            },
        ],
        []
    )

    const [isModalOpen, setModalStatus] = useState(false)
    const [type_value, setTypeValue] = useState(false)
    const [form_name, setFormName] = useState(false)

    const onDialogClose = () => {
        setModalStatus(false)
    }

    return <div>
        <div style={{ justifyContent: 'space-between', display: 'flex', }}>
            <div>
                <h4>Sign-up forms</h4>
            </div>
            <div>
                <Button
                    className="mr-2"
                    variant="solid"
                    icon={<HiOutlinePlusCircle />}
                    onClick={() => setModalStatus(true)}
                >
                    <span>Create new sign-up form</span>
                </Button>
            </div>
        </div>
        <br></br>
        <DataTable
            columns={columns}
        />
        <Dialog
            isOpen={isModalOpen}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h5>Create New Forms</h5>
            <br></br>
            <h5>Form Name</h5>
            <div className="mt-4">
                <Input
                    type="text"
                    className="max-w-md md:w-52 md:mb-0 mb-4"
                    size="sm"
                    placeholder="e.g Newsletter sign-up"
                    style={{ width: '100%' }}
                    onChange={(e) => setFormName(e.target.value)}
                />
            </div>
            <br />
            <br />
            <h5>Choose a form type</h5>
            <div id="form_type" className='flex'>
                <div className='flex-initial w-14'>
                    <input
                        type="radio"
                        className="radio text-purple"
                        value={type_value}
                        style={{ border: "1px solid gray" }}
                        onChange={() => setTypeValue(true)}
                    />
                </div>
                <div id="pop_up" className='flex-initial'>
                    <h4 style={{ marginTop: "-4px" }}>Popup</h4>&nbsp;&nbsp;&nbsp;
                    <p>Pops up is in the middle screen.</p>
                </div>
            </div>
            <br /><br />
            <div className='confirmform'>
                <Button
                    className="mr-2"
                    variant="solid"
                    icon={<HiOutlinePlusCircle />}
                    onClick={() => setModalStatus(true)}
                >
                    <span>Save</span>
                </Button>
                <Button
                    className="mr-2"
                    variant="default"
                    onClick={() => setModalStatus(false)}
                >
                    <span>close</span>
                </Button>
            </div>
        </Dialog>
    </div>
}

export default SingleMenuView
