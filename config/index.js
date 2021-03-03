import prod from '@/config/production'
import dev from '@/config/development'

export default process.env.NODE_ENV === 'development' ? dev : prod
