import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;
import java.util.List;


@Component
public class QueryResolver implements GraphQLQueryResolver {

    private final BookRepository bookRepository;

    public QueryResolver(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> books() {
        return bookRepository.findAll();
    }
}
