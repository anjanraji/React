import { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi';
import { Spinner } from '../components/ui/spinner';
import { DashboardCard } from '../components/DashboardCard';
import { NewPostDialog } from '../components/NewPostDialog';
import { ButtonGroupView } from '../components/ButtonGroupView';
import { DeletePostAlert } from '../components/DeletePostAlert';
import { EditPostDialog } from '../components/EditPostDialog';


export const Dashboard = ({ user }) => {
    const api = useApi()

    const [dashboardState, setDashboardState] = useState({
        isLoading: false,
        isLoaded: false,
        myBlogs: [],
        listView: false,
        popupState: {
            isDelete: false,
            isEdit: false
        },
        currentId: '',
        currentTitle: ''
    })

    const { isLoading } = dashboardState

    const togglePopup = ({
        popupType,
        value = true,
        id = null,
        title = ''
    }) => {
        setDashboardState(prev => ({
            ...prev,
            currentId: id !== null ? id : prev.currentId,
            currentTitle: title || prev.currentTitle,
            popupState: {
                ...prev.popupState,
                [popupType]: value
            }
        }))
    }

    const fetchMyBlogs = async () => {
        setDashboardState(
            prev => ({
                ...prev,
                isLoading: true,
                isLoaded: false
            })
        )

        const response = await api.blogs.getAll()

        const myBlogs = response.data.filter(
            (blog) => String(blog.authorId) === String(user._id)
        )

        setDashboardState(
            prev => ({
                ...prev,
                isLoading: false,
                myBlogs: myBlogs
            })
        )

        setTimeout(() => {
            setDashboardState(
                prev => ({
                    ...prev,
                    isLoaded: true
                })
            )
        }, 10)
    }

    useEffect(() => {
        fetchMyBlogs()
    }, [])

    return (
        <>
            {isLoading && (
                <div
                    className='flex justify-center items-center gap-1.5 text-2xl absolute top-1/2 left-1/2 -translate-1/2'
                >
                    <Spinner className="size-7" />
                    <span>Loading...</span>
                </div>
            )}

            {!isLoading && (
                <>
                    <NewPostDialog
                        onSuccess={fetchMyBlogs}

                        dashboardState={dashboardState}
                        setDashboardState={setDashboardState}
                    />
                    <div className="flex items-center my-5">
                        <h1 className="scroll-m-20 flex-1 text-3xl font-bold tracking-tight text-balance">
                            Your Blog Posts
                        </h1>
                        <ButtonGroupView
                            dashboardState={dashboardState}
                            setDashboardState={setDashboardState}
                        />
                    </div>
                    <div
                        className={`grid grid-cols-1 gap-3 ${!dashboardState.listView ? 'gap-5 md:grid-cols-2 lg:grid-cols-3' : ''}`}
                    >
                        <DashboardCard
                            dashboardState={dashboardState}
                            togglePopup={togglePopup}
                        />
                        <DeletePostAlert
                            dashboardState={dashboardState}
                            togglePopup={togglePopup}
                            onSuccess={fetchMyBlogs}
                        />
                        <EditPostDialog
                            dashboardState={dashboardState}
                            togglePopup={togglePopup}
                            onSuccess={fetchMyBlogs}
                        />
                    </div>
                </>
            )}
        </>
    )
}